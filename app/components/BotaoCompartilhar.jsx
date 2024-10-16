'use client';

import { FaShareFromSquare } from 'react-icons/fa6';
import styles from '@/styles/BotaoCompartilhar.module.css';

export default function BotaoCompartilhar({ codigo, cor }) {
	async function compartilhar() {
		try {
			await navigator.clipboard.writeText(codigo);
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