'use server';
import { lerUsuarios, cadastrarUsuario, gravarEvento, excluirEvento, atualizarEvento, gravarEmpresa, lerEmpresa, excluirEmpresa } from '@/app/lib/firebase/firestoreQuerys';
import { signIn, signOut } from '@/auth';
import { revalidatePath } from 'next/cache';

// Validações
// Verifica se os dados do formulário de cadastro de usuário estão corretos
export async function validarCadastro(dadosUsuario) {
    const validacao = { status: true, erros: {} };

    // Validação de email
    if (!dadosUsuario?.email) {
        validacao.status = false
        validacao.erros.email = 'Campo email não pode estar vazio.';
    } else if (!/\w+@\w+.com(.\w+)*/.test(dadosUsuario.email)) { // Usa uma Expressão Regular para verificar se o formato do email é valido
        validacao.status = false;
        validacao.erros.email = 'Email inválido.'
    }

    // Validação de senha
    if (!dadosUsuario?.senha || dadosUsuario?.senha?.lenght < 6) {
        validacao.status = false;
        validacao.erros.senha = 'Senha deve ter no mínimo 6 caracteres.';
    }

    // Validação de confirmação de senha
    if (!dadosUsuario?.confirmarSenha || dadosUsuario?.confirmarSenha !== dadosUsuario?.senha) {
        validacao.status = false;
        validacao.erros.confirmarSenha = 'As senhas não coincidem.';
    }

    if (!dadosUsuario?.nome) {
        validacao.status = false;
        validacao.erros.nome = 'Campo nome não pode estar vazio';
    }

    if (!dadosUsuario?.cnpj) {
        validacao.status = false;
        validacao.erros.cnpj = 'Campo CNPJ não pode estar vazio';
    }

    if (!dadosUsuario?.telefone) {
        validacao.status = false;
        validacao.erros.telefone = 'Campo telefone não pode estar vazio';
    }

    return validacao;
}

export async function validarEvento(dadosEvento) {
    const validacao = { status: true, erros: {} };

    if (!dadosEvento?.data) {
        validacao.status = false;
        validacao.erros.data = 'Campo horário não pode estar vazio';
    }

    if (!dadosEvento?.local) {
        validacao.status = false;
        validacao.erros.local = 'Campo local não pode estar vazio';
    }

    if (!dadosEvento?.nome) {
        validacao.status = false;
        validacao.erros.nome = 'Campo nome não pode estar vazio';
    }

    return validacao;
}

// Verifica se o usuário já existe no banco de dados
export async function validarUsuario(cnpj, email) {
    const resposta = await lerUsuarios();
    let repetido = { status: false, mensagem: '' };

    if (resposta.status) {
        resposta.usuarios.forEach(usuario => {
            if (usuario.email === email) {
                repetido.status = true;
                repetido.mensagem = 'Email já cadastrado.';
            } else if (usuario.cnpj === cnpj) {
                repetido.status = true;
                repetido.mensagem = 'CNPJ já cadastrado.';
            }
        });

        return repetido;
    }

    return resposta;

}

// Verifica se os dados do formulário de empresa estão corretos
export async function validarEmpresa(dadosEmpresa) {
    const validacao = { status: true, erros: {} };

    if (!dadosEmpresa?.cnpj) {
        validacao.status = false;
        validacao.erros.cpnj = 'Campo CNPJ não pode estar vazio.';
    }

    if (!dadosEmpresa?.nome) {
        validacao.status = false;
        validacao.erros.nome = 'Campo NOME não pode estar vazio.';
    }

    return validacao;
}

// Executa as validações e cadastra o usuário
export async function cadastrar(dadosUsuario) {
    const respostaValidacao = await validarCadastro(dadosUsuario);
    
    if (!respostaValidacao.status) {
        console.error(respostaValidacao.erros);
        return respostaValidacao;
    } 

    const repetido = await validarUsuario(dadosUsuario.cnpj, dadosUsuario.email);

    if (repetido.status) return repetido;

    const resposta = await cadastrarUsuario(dadosUsuario);
    return resposta;
}

// Ações de autenticação
// Ação para autenticar o usuário/convidado
export async function autenticar(dados) {
    try {
        await signIn('credentials', { ...dados, redirect: false });
    } catch (erro) {
        return { ok: false, erros: { auth: `Erro de autenticação: ${erro.message}` } };
    }

    return { ok: true };
}

// Ação para deslogar o usuário
export async function deslogar() {
	await signOut({ redirectTo: '/login' });
}

// Ações de eventos
// Ação para criar eventos
export async function criarEvento(idUsuario, dados) {
    const respostaValidacao = await validarEvento(dados);

    if (!respostaValidacao.status) {
        console.error(respostaValidacao.erros);
        return respostaValidacao;
    }

    const resposta = await gravarEvento(idUsuario, dados);

		if (resposta.status) {
			revalidatePath('/dashboard');
		}
		
    return resposta;
}

// Ação para deletar eventos
export async function deletarEvento(idEvento) {
    const resposta = await excluirEvento(idEvento);
    revalidatePath('/dashboard');

    return resposta;
}

// Ação para editar eventos
export async function editarEvento(idEvento, dados, dashboard) {
	const respostaValidacao = await validarEvento(dados);

	if (!respostaValidacao.status) {
		console.error(respostaValidacao.erros);
		return respostaValidacao;
	}

	const resposta = await atualizarEvento(idEvento, dados);

	if (resposta.status) {
		const url = dashboard ? '/dashboard' : `/dashboard/eventos/${idEvento}`;
		revalidatePath(url);
	}

	return resposta;
}

// Ações de empresas
// Ação para cadastrar empresas
export async function cadastrarEmpresa(idEvento, dadosEmpresa) {
    // Verifica se os dados recebidos estão corretos
    const respostaValidacao = await validarEmpresa(dadosEmpresa)

    if (!respostaValidacao.status) {
        console.error(respostaValidacao.erros);
        return respostaValidacao;
    }

    // Verifica se a empresa já existe para aquele evento
    const repetido = await lerEmpresa(idEvento, dadosEmpresa.cnpj);

    if (repetido.status && repetido?.empresa) {
        const respostaRepetido = { status: false, erros: { repetido: 'Empresa já cadastrada'} }
        console.error(respostaRepetido.erros);
        return respostaRepetido;
    }

    // Cadastra a empresa
    const resposta = await gravarEmpresa(idEvento, dadosEmpresa);

    if (resposta.status) {
        revalidatePath(`/dashboard/eventos/${idEvento}/compartilhar`);
    }

    return resposta;
}

// Ação para excluir uma empresa
export async function deletarEmpresa(idEvento, idEmpresa) {
	const resposta = await excluirEmpresa(idEvento, idEmpresa);

	if (resposta.status) {
		revalidatePath(`/dashboard/eventos/${idEvento}/compartilhar`);
	}

	return resposta;
}

// Ações de funcionário
// Cadastrar funcionário