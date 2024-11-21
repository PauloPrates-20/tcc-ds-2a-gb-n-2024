'use client';

import styles from '@/styles/FormCadastro.module.css';
import BotaoForm from './BotaoForm';
import Entrada from './Entrada';
import { cadastrar } from '../lib/actions';
import mascara from '../lib/masks';
import { errorHandling } from '../lib/errorHandling';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function FormCadastro() {
	const router = useRouter();
	const SPMaskBehavior = function (val) {
		return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
	},
		spOptions = {
			onKeyPress: function (val, e, field, options) {
				field.mask(SPMaskBehavior.apply({}, arguments), options);
			}
		};

	mascara('cnpj', '00.000.000/0000-00');
	mascara('telefone', SPMaskBehavior, spOptions);

	async function handleSubmit(e) {
		e.preventDefault();

		const formulario = new FormData(e.target);
		const dados = {};
		for (const [key, value] of formulario.entries()) {
			dados[key] = value;
		}

		const resposta = await cadastrar(dados)

		if (!resposta?.status) {
			const erros = await errorHandling(resposta.erros);
			Swal.fire({
				title: 'Não foi possível concluir o cadastro!',
				text: erros[0],
				icon: 'error',
				customClass: {
					popup: 'swal',
				},
			});
			return;
		}

		e.target.reset();
		const dialog = await Swal.fire({
			icon: 'success',
			title: resposta?.mensagem,
			customClass: {
				popup: 'swal',
			},
		});

		if (dialog.isConfirmed || dialog.isDismissed) router.push('/login');
	}

	return (
		<form onSubmit={handleSubmit} className={styles.formRow}>
			<div className={styles.form}>
				<Entrada nome='email'>EMAIL</Entrada>
				<Entrada nome='senha' tipo="password">SENHA</Entrada>
				<Entrada nome='confirmarSenha' tipo="password">CONFIRMAR SENHA</Entrada>
				<Entrada nome='nome'>NOME</Entrada>
				<Entrada nome='cnpj'>CNPJ</Entrada>
				<Entrada nome='telefone'>TELEFONE</Entrada>
			</div>
			<BotaoForm tipo="submit">CADASTRAR</BotaoForm>
		</form>
	);
}