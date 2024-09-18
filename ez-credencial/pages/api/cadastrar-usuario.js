import { validarCadastro, validarUsuario } from '@/lib/validador';
import { cadastrarUsuario } from '@/lib/firebase/firestoreQuerys';

export default async function CadastrarUsuario(req, res) {
    const dadosUsuario = JSON.parse(req.body);
    const validacao = validarCadastro(dadosUsuario);
    
    if (!validacao.status) {
        res.status(200).json(validacao);
        return;
    }

    const repetido = await validarUsuario(dadosUsuario.cnpj, dadosUsuario.email);

    if (repetido.status) {
        res.status(200).json(repetido);
        return;
    }

    const resposta = await cadastrarUsuario(dadosUsuario);
    res.status(200).json(resposta);
}