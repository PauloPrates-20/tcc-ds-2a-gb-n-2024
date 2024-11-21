'use client';

import { FaShareFromSquare } from 'react-icons/fa6';
import styles from '@/styles/BotaoCompartilhar.module.css';
import Swal from 'sweetalert2';

export default function BotaoCompartilhar({ codigo, cor, idEvento }) {
	const urlConvite = `${process.env.NEXT_PUBLIC_HOST_NAME}/dashboard/eventos/${idEvento}/convite`;
	const textoCompartilhar = `Você foi convidado para o evento: ${urlConvite} \n\nUtilize seu cnpj e o código ${codigo} para acessar.`;

	async function compartilhar() {
		try {
			await navigator.clipboard.writeText(textoCompartilhar);
			Swal.fire({
				icon: 'success',
				title: 'Link de convite copiado!',
				text: 'Compartilhe com a empresa parceira.',
				customClass: {
					popup: 'swal',
				},
			});
		} catch (erro) {
			Swal.fire({
				icon: 'error',
				title: 'Não foi possível gerar o link de compartilhamento!',
				text: erro.message,
			});
		}
	}
	return (
		<button className={styles.icone} onClick={compartilhar}>
			<FaShareFromSquare style={{ color: cor ? cor : '#333' }} />
		</button>
	);
}