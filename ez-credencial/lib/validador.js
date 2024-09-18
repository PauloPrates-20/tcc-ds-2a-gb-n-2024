import { lerUsuarios } from './firebase/firestoreQuerys';

export function validarCadastro(dadosUsuario) {
    const validacao = { status: true, erros: {} };

    // Validação de email
    if (!dadosUsuario?.email) {
        validacao.status = false
        validacao.erros.email = 'Campo email não pode estar vazio.';
    } else if (!/\w+@\w+.com/.test(dadosUsuario.email)) {
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

export async function validarUsuario(cnpj, email) {
    const usuarios = await lerUsuarios();
    let repetido = { status: false };

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