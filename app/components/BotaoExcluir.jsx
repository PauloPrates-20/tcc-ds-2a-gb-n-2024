'use client';

import { FaRegTrashCan } from 'react-icons/fa6';
import { deletarEmpresa, deletarEvento } from '../lib/actions';
import { useRouter } from 'next/navigation';
import styles from '@/styles/BotaoExcluir.module.css';

export default function BotaoExcluir({ idEvento, idEmpresa, tipoAlvo, cor }) {
	const router = useRouter();

	async function deletar() {
		let resposta = null;

		switch(tipoAlvo) {
			case 'evento':
				resposta = await deletarEvento(idEvento);
				router.push('/dashboard');
				break;
			case 'empresa':
				resposta = await deletarEmpresa(idEvento, idEmpresa);
				break;
		}

		console.log(resposta?.mensagem ? resposta.mensagem : resposta?.erros);
	}

	return (
		<button className={styles.icone} onClick={deletar}>
			<FaRegTrashCan style={{ color: cor ? cor : '#333' }}/>
		</button>
	);
}