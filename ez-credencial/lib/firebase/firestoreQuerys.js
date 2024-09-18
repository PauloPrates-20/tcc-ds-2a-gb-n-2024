import { firebaseConfig } from '@/config.json';
import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const bd = getFirestore(app);

const caminhos = {
    usuarios: 'Usuario',
};

export async function cadastrarUsuario(dadosUsuario) {
    let resposta = { status: true };
    const usuario = {
        cnpj: dadosUsuario.cnpj,
        email: dadosUsuario.email,
        eventos: [],
        nome: dadosUsuario.nome,
        senha: dadosUsuario.senha,
        status: false,
        telefone: dadosUsuario.telefone
    };

    try {
        await addDoc(collection(bd, caminhos.usuarios), usuario);

        resposta.mensagem = `Usuário cadastrado com sucesso.`
    } catch (erro) {
        resposta.status = false;
        resposta.mensagem = `Erro de banco de dados: ${erro}`;
    }

    return resposta;
}