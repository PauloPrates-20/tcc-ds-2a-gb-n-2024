import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection, getDocs, query, where, or, orderBy, deleteDoc, doc } from 'firebase/firestore';

// Configuração do banco de dados
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
}
const app = initializeApp(firebaseConfig);
const bd = getFirestore(app);

// Definição do caminho das coleções
const caminhos = {
    usuarios: 'Usuario',
    eventos: 'Eventos',
};

// Funções de usuário
// Função para gravar o documento usuário no banco de dados
export async function cadastrarUsuario(dadosUsuario) {
    let resposta = { status: true };
    const usuario = {
        cnpj: dadosUsuario.cnpj,
        email: dadosUsuario.email,
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

// Função para ler todos os usuários do banco de dados
export async function lerUsuarios() {
    const query = await getDocs(collection(bd, caminhos.usuarios));
    const usuarios = [];
    query.forEach(usuario => {
        usuarios.push(usuario.data());
    })

    return usuarios;
}

// Função para recuperar o usuário e comparar a senha
// Credenciais = { usuario, senha }
export async function logarUsuario(credenciais) {
	// Query para encontrar o usuário por email ou cnpj
	const q = query(
		collection(bd, caminhos.usuarios),
		or(
			where('email', '==', credenciais.usuario),
			where('cnpj', '==', credenciais.usuario)
		)
	);
	
	try {
		// Executa a query
		const querySnapshot = await getDocs(q);

		if (!querySnapshot.empty) {
			const doc = querySnapshot.docs[0];

			// Verifica se a senha digitada é igual a senha cadastrada para o login
			if (doc.data().senha === credenciais.senha) {
                const user = { id: doc.id, email: doc.data().email, name: doc.data().nome };

                return user;
            }
		}

        return null;
	} catch (erro) {
		console.error('Falha ao logar usuário: ', erro);
		return null;
	}
}

/* Eventos */

// Função para adicionar evento
export async function adicionarEvento(idUsuario, dados) {
    const resposta = { status: true };
    const evento = {
        data: dados.data,
        local: dados.local,
        nome: dados.nome,
    };

    try {
        await addDoc(collection(bd, caminhos.usuarios, idUsuario, caminhos.eventos), evento);

        resposta.mensagem = 'Evento adicionado com sucesso.';
    } catch (erro) {
        console.error('Falha ao adicionar evento:', erro);

        resposta.status = false;
        resposta.mensagem = 'Error ao adicionar evento';
    }

    return resposta;
}

// Funções de evento
// Função para ler os eventos do usuário
export async function lerEventos(idUsuario) {
    const caminho = collection(bd, caminhos.usuarios, idUsuario, caminhos.eventos);
    const q = query(
        caminho,
        orderBy('nome')
    );
    const querySnapshot = await getDocs(q);
    const eventos = []
    querySnapshot.forEach(evento => {
        eventos.push({ id: evento.id, dados: evento.data() });
    })

    return eventos;
}

// Função para gravar eventos do usuário
export async function gravarEvento(idUsuario, dados) {
    const caminho = collection(bd, caminhos.usuarios, idUsuario, caminhos.eventos);
    const resposta = { status: true };

    const evento = {
        horario: dados.horario,
        local: dados.local,
        nome: dados.nome,
    };
    
    try {
        await addDoc(caminho, evento);

        resposta.mensagem = 'Evento criado com sucesso.';
    } catch (erro) {
        resposta.status = false;
        resposta.mensagem = `Erro de banco de dados: ${erro.message}`;
    }

    return resposta;
}

export async function excluirEvento(idUsuario, idEvento) {
    const caminho = doc(bd, caminhos.usuarios, idUsuario, caminhos.eventos, idEvento);
    const resposta = { status: true };

    try {
        await deleteDoc(caminho);

        resposta.mensagem = 'Evento excluído com sucesso.';
    } catch (erro) {
        resposta.status = false;
        resposta.mensagem = `Erro ao excluir evento: ${erro.message}`;
    }

    return resposta;
}