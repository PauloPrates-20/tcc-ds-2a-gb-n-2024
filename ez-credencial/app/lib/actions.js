'use server';
import { lerUsuarios, cadastrarUsuario, gravarEvento, excluirEvento } from '@/app/lib/firebase/firestoreQuerys';
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
    } else if (!/\w+@\w+.com/.test(dadosUsuario.email)) { // Usa uma Expressão Regular para verificar se o formato do email é valido
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

    if (!dadosEvento?.horario) {
        validacao.status = false;
        validacao.erros.horario = 'Campo horário não pode estar vazio';
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
    const usuarios = await lerUsuarios();
    let repetido = { status: false, mensagem: '' };

    usuarios.forEach(usuario => {
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

// Executa as validações e cadastra o usuário
export async function cadastrar(dadosUsuario) {
    const validacao = await validarCadastro(dadosUsuario);
    
    if (!validacao.status) return validacao;

    const repetido = await validarUsuario(dadosUsuario.cnpj, dadosUsuario.email);

    if (repetido.status) return repetido;

    const resposta = await cadastrarUsuario(dadosUsuario);
    return resposta;
}

// Ações de autenticação
// Ação para autenticar o usuário
export async function autenticar(dados) {
    try {
        await signIn('credentials', { ...dados, redirect: false });
    } catch (erro) {
        console.error(erro);
        return { ok: false, erro: erro.message };
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
    const validacao = await validarEvento(dados);

    if (!validacao.status) {
        return validacao.erros;
    }

    const resposta = await gravarEvento(idUsuario, dados);
    return resposta;
}

// Ação para deletar eventos
export async function deletarEvento(idUsuario, idEvento) {
    const resposta = await excluirEvento(idUsuario, idEvento);
    revalidatePath('/dashboard');

    return resposta;
}