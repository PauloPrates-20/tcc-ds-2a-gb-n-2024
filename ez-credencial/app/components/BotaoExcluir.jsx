'use client';

import { FaRegTrashCan } from 'react-icons/fa6';
import { deletarEvento } from '../lib/actions';
import { useRouter } from 'next/navigation';
import styles from '@/styles/BotaoExcluir.module.css';

export default function BotaoExcluir({ idUsuario, idAlvo, tipoAlvo }) {
	const router = useRouter();

	async function deletar() {
		let resposta = null;

		router.push('/dashboard');
		switch(tipoAlvo) {
			case 'evento':
				resposta = await deletarEvento(idUsuario, idAlvo);
				break;
		}

		console.log(resposta?.mensagem ? resposta.mensagem : resposta?.erros);
	}

	return (
		<button className={styles.icone} onClick={deletar}>
			<FaRegTrashCan />
		</button>
	);
}