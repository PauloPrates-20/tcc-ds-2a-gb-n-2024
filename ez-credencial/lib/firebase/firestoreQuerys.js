import { firebaseConfig } from '@/config.json';
import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const bd = getFirestore(app);

const caminhos = {
    usuarios: 'Usuarios',
};

export async function cadastrarUsuario(dadosUsuario) {
    try {
        const documento = await addDoc(collection(bd, caminhos.usuarios));

        console.log(`Usuário ${documento.id} cadastrado com sucesso`);
    } catch (erro) {
        console.error(`Erro de banco de dados: ${erro}`);
    }
}