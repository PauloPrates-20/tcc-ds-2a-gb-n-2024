'use client';

import { FaShareFromSquare } from 'react-icons/fa6';
import styles from '@/styles/BotaoCompartilhar.module.css';

export default function BotaoCompartilhar({ codigo, cor, idEvento }) {
	const urlConvite = `${process.env.NEXT_PUBLIC_HOST_NAME}/dashboard/eventos/${idEvento}/convite`;
	const textoCompartilhar = `Você foi convidado para o evento: ${urlConvite} \n\nUtilize seu cnpj e o código ${codigo} para acessar.`;

	async function compartilhar() {
		try {
			await navigator.clipboard.writeText(textoCompartilhar);
			window.alert('Código copiado. Compartilhe com a empresa parceira.')
		} catch (erro) {
			console.error(erro);
		}
	}
	return (
		<button className={styles.icone} onClick={compartilhar}>
			<FaShareFromSquare style={{ color: cor ? cor : '#333' }}/>
		</button>
	);
}