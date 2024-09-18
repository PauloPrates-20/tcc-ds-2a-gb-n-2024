export function validarCadastro(dadosUsuario) {
    const validacao = { status: true, erros: {} };

    // Validação de email
    if (!dadosUsuario?.email) {
        validacao.status = false
        validacao.erros.email = 'Campo email não pode estar vazio.';
    } else if (!/\s*@\s*.com/.test(dadosUsuario.email)) {
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
        validacao.erros.senha = 'As senhas não coincidem.';
    }

    if (!dadosUsuario?.nome) {
        validacao.status = false;
        validacao.erros.nome = 'Campo nome não pode estar vazio';
    }

    if (!dadosUsuario?.cnpj) {
        validacao.status = false;
        validacao.erros.cnpj = 'Campo npj não pode estar vazio';
    }

    if (!dadosUsuario?.telefone) {
        validacao.status = false;
        validacao.erros.telefone = 'Campo telefone não pode estar vazio';
    }
}