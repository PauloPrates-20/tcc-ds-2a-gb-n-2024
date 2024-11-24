'use client';

import Entrada from './Entrada';
import BotaoForm from './BotaoForm';
import styles from '@/styles/FormLogin.module.css';
import { autenticar } from '@/app/lib/actions';
import { useSearchParams, useRouter } from 'next/navigation';
import { errorHandling } from '../lib/errorHandling';
import Link from 'next/link';
import Swal from 'sweetalert2';

export default function FormLogin() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';

	async function handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		const dados = { usuario: formData.get('usuario'), senha: formData.get('senha') };
		const resposta = await autenticar(dados);

		if (resposta.ok) {
			router.push(callbackUrl);
			return;
		}

		if (!resposta?.status) {
            const erros = await errorHandling(resposta.erros);
            Swal.fire({
							title: 'Não foi possível fazer login!',
							text: erros[0],
							icon: 'error',
							customClass: {
								popup: 'swal'
							}
						});
            return;
        }
	}

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<div className={styles.entradas}>
				<Entrada nome='usuario' >Insira seu e-mail de acesso</Entrada>
				<Entrada nome='senha' tipo='password'>Insira sua senha</Entrada>
			</div>

			<BotaoForm tipo='submit'>ENTRAR</BotaoForm>
		</form>
	);
}