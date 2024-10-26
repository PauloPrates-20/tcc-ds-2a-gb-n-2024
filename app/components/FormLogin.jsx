'use client';

import Entrada from './Entrada';
import BotaoForm from './BotaoForm';
import styles from '@/styles/FormLogin.module.css';
import { autenticar } from '@/app/lib/actions';
import { useSearchParams, useRouter } from 'next/navigation';
import { errorHandling } from '../lib/errorHandling';

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
            window.alert(erros);
            return;
        }
	}

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<div className={styles.entradas}>
				<Entrada nome='usuario'>EMAIL</Entrada>
				<Entrada nome='senha' tipo='password'>SENHA</Entrada>
			</div>

			<BotaoForm tipo='submit'>ENTRAR</BotaoForm>
		</form>
	);
}