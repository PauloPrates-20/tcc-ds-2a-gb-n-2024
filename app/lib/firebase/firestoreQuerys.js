import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection, getDocs, query, where, or, orderBy, deleteDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import { generateKeySync } from 'node:crypto';

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
    empresas: 'Empresas',
    funcionarios: 'Funcionarios',
};

// Querys de usuário
// Query para gravar o documento usuário no banco de dados
export async function cadastrarUsuario(dadosUsuario) {
    const resposta = { status: true, erros: {} };
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
        resposta.erros.bd = `Erro de banco de dados: ${erro}`;
    }

    return resposta;
}

// Query para ler todos os usuários do banco de dados
export async function lerUsuarios() {
    const resposta = { status: true, erros: {} };

    try {
        const querySnapshot = await getDocs(collection(bd, caminhos.usuarios));
        const usuarios = [];
        querySnapshot.forEach(usuario => {
            usuarios.push(usuario.data());
        });

        resposta.usuarios = usuarios;
        resposta.mensagem = 'Usuários lidos com sucesso';
    } catch (erro) {
        resposta.status = false;
        resposta.erros.bd = `Erro de banco de dados: ${erro.message}`;
    }

    return resposta;
}

// Query para recuperar o usuário e comparar a senha
// Credenciais = { usuario, senha }
export async function logarUsuario(credenciais) {
    const resposta = { status: true, erros: {} };
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
                const usuario = { 
                    id: doc.id,
                    email: doc.data().email,
                    name: doc.data().nome, 
                };

                resposta.usuario = usuario;
                resposta.mensagem = 'Usuário autenticado com sucesso.';

                return resposta;
            }
		}

        resposta.status = false;
        resposta.erros.credenciais = `Usuário ou senha incorretos`;
	} catch (erro) {
		resposta.status = false;
        resposta.erros.bd = `Erro de banco de dados: ${erro.message}`;
	}

    return resposta;
}

// Querys de evento
// Query para ler todos os eventos do usuário
export async function lerEventos(idUsuario) {
    const caminho = collection(bd, caminhos.eventos);
    const q = query(
        caminho,
        where('proprietario', '==', idUsuario),
        orderBy('nome'),
    );
    const resposta = { status: true, erros: {} };

    try {
        const querySnapshot = await getDocs(q);
        const eventos = []
        querySnapshot.forEach(evento => {
            eventos.push({ id: evento.id, dados: evento.data() });
        })

        resposta.eventos = eventos;
    } catch (erro) {
        resposta.status = false;
        resposta.erros.bd = `Erro de banco de dados: ${erro.message}`;
    }

    return resposta;
}

// Query para ler um evento do usuário 
export async function lerEvento(idEvento) {
    const caminho = doc(bd, caminhos.eventos, idEvento);
    const resposta = { status: true, erros: {} };

    try {
        const querySnapshot = await getDoc(caminho);
        const evento = { 
            id: querySnapshot.id,
            dados: querySnapshot.data(),
        };
        resposta.evento = evento;
    } catch (erro) {
        resposta.status = false;
        resposta.erros.bd = `Erro de banco de dados: ${erro.message}`;
    }

    return resposta;
}

// Query para gravar eventos do usuário
export async function gravarEvento(idUsuario, dadosEvento) {
    const caminho = collection(bd, caminhos.eventos);
    const resposta = { status: true, erros: {} };
		const codigo = generateKeySync('hmac', { length: 32 }).export().toString('hex');

    const evento = {
        data: dadosEvento.data,
        local: dadosEvento.local,
        nome: dadosEvento.nome,
        proprietario: idUsuario,
				codigo: codigo,
    };
    
    try {
        await addDoc(caminho, evento);

        resposta.mensagem = 'Evento criado com sucesso.';
    } catch (erro) {
        resposta.status = false;
        resposta.erros.bd = `Erro de banco de dados: ${erro.message}`;
    }

    return resposta;
}

// Query para excluir eventos do usuário
export async function excluirEvento(idEvento) {
    const caminho = doc(bd, caminhos.eventos, idEvento);
    const resposta = { status: true, erros: {} };

    try {
        await deleteDoc(caminho);

        resposta.mensagem = 'Evento excluído com sucesso.';
    } catch (erro) {
        resposta.status = false;
        resposta.erros.bd = `Erro ao excluir evento: ${erro.message}`;
    }

    return resposta;
}

// Query para editar eventos do usuário
export async function atualizarEvento(idEvento, dados) {
	const caminho = doc(bd, caminhos.eventos, idEvento);
	const resposta = { status: true, erros: {} };

	try {
		await updateDoc(caminho, dados);

		resposta.mensagem = 'Evento editado com sucesso.';
	} catch (erro) {
		resposta.status = false;
		resposta.erros.bd = `Erro de banco de dados: ${erro.message}`;
	}

	return resposta;
}

// Querys de empresas convidadas
// Query para cadastrar empresas convidadas
export async function gravarEmpresa(idEvento, dadosEmpresa) {
    const caminho = collection(bd, caminhos.eventos, idEvento, caminhos.empresas);
    const empresa = {
        cnpj: dadosEmpresa.cnpj,
        nome: dadosEmpresa.nome,
        convidado: true,
    }
    const resposta = { status: true, erros: {} };

    try {
        await addDoc(caminho, empresa);

        resposta.mensagem = "Empresa cadastrada com sucesso";
    } catch (erro) {
        resposta.status = false;
        resposta.erros.bd = `Erro de banco de dados: ${erro.message}`;
    }

    return resposta;
}

// Query para ler uma empresa
export async function lerEmpresa(idEvento, cnpj) {
    const caminho = collection(bd, caminhos.eventos, idEvento, caminhos.empresas);
    const q = query(
        caminho,
        where('cnpj', '==', cnpj)
    );
    const resposta = { status: true, erros: {} }

    try {
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
            resposta.empresa = {
                id: querySnapshot.docs[0].id,
                dados: querySnapshot.docs[0].data(),
            };
        }
    } catch (erro) {
        resposta.status = false;
        resposta.erros.bd = `Erro de banco de dados: ${erro.message}`;
    }

    return resposta;
}

// Query para ler todas as empresas
export async function lerEmpresas(idEvento) {
    const caminho = collection(bd, caminhos.eventos, idEvento, caminhos.empresas);
    const resposta = { status: true, erros: {} };
    const q = query(
        caminho,
        orderBy('nome')
    );

    try {
        const querySnapshot = await getDocs(q);
        const empresas = [];

        querySnapshot.forEach(doc => {
            empresas.push({ id: doc.id, dados: doc.data() });
        });

        resposta.empresas = empresas;
    } catch (erro) {
        resposta.status = false;
        resposta.erros.bd = `Erro de banco de dados: ${erro.message}`;
    }

    return resposta;
}

// Query para excluir uma empresa
export async function excluirEmpresa(idEvento, idEmpresa) {
	const caminho = doc(bd, caminhos.eventos, idEvento, caminhos.empresas, idEmpresa);
	const resposta = { status: true, erros: {} };

	try {
		await deleteDoc(caminho);

		resposta.mensagem = 'Empresa deletada com sucesso';
	} catch (erro) {
		resposta.status = false;
		resposta.erros.bd = `Erro de banco de dados: ${erro.message}`;
	}

	return resposta;
}

// Query para logar a empresa
// Teste pendente
export async function logarEmpresa(credenciais) {
    const { cnpj, codigo, idEvento } = credenciais;
    const caminhoEmpresa = collection(bd, caminhos.eventos, idEvento, caminhos.empresas);
    const caminhoEvento = doc(bd, caminhos.eventos, idEvento);
    const queryEmpresa = query(
        caminhoEmpresa,
        where('cnpj', '==', cnpj)
    );
    const resposta = { status: true, erros: {} };
    
    try {
        const evento = await getDoc(caminhoEvento);

        if (evento) {
            const querySnapshot = await getDocs(queryEmpresa);

            if (!querySnapshot.empty) {
                if (evento.data().codigo === codigo) {
                    resposta.usuario = {
                        id: querySnapshot.docs[0].id,
                        name: querySnapshot.docs[0].data().nome,
                        email: `convidado_${idEvento}`,
                    };
                    resposta.mensagem = 'Empresa autenticada com sucesso.';
                } else {
                    resposta.status = false;
                    resposta.erros.credenciais = 'Credenciais inválidas.';
                }
            } else {
                resposta.status = false;
                resposta.erros.credenciais = 'Credenciais inválidas.';
            }
        } else {
            resposta.status = false;
            resposta.erros.evento = 'Evento não encontrado';
        }
    } catch (erro) {
        resposta.status = false;
        resposta.erros.bd = `Erro de banco de dados: ${erro.message}`;
    }

    return resposta;
}