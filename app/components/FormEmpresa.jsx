'use client';

import Entrada from './Entrada';
import BotaoForm from './BotaoForm';
import styles from '@/styles/FormPadrao.module.css';
import { cadastrarEmpresa } from '../lib/actions';
import mascara from '../lib/masks';
import { errorHandling } from '../lib/errorHandling';
import Swal from 'sweetalert2';

export default function FormEmpresa({ idEvento }) {
	mascara('cnpj', '00.000.000/0000-00');

	async function handleSubmit(e) {
		e.preventDefault();

		const formData = new FormData(e.target);
		const dadosEmpresa = { nome: formData.get('empresa'), cnpj: formData.get('cnpj') };
		const resposta = await cadastrarEmpresa(idEvento, dadosEmpresa);

		if (!resposta?.status) {
			const erros = await errorHandling(resposta.erros);
			Swal.fire({
				icon: 'error',
				title: 'Não foi possível cadastrar a empresa!',
				text: erros[0],
				customClass: {
					popup: 'swal',
				},
			});
			return;
		}

		Swal.fire({
			icon: 'success',
			title: resposta?.mensagem,
			customClass: {
				popup: 'swal',
			},
		});
		
		e.target.reset();
	}
	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<div className={styles.entradas}>
				<Entrada nome='empresa'>EMPRESA</Entrada>
				<Entrada nome='cnpj'>CNPJ</Entrada>
			</div>
			<BotaoForm tipo='submit'>CADASTRAR</BotaoForm>
		</form>
	);
}