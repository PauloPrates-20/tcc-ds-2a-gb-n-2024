'use client';

import Entrada from './Entrada';
import BotaoForm from './BotaoForm';
import styles from '@/styles/FormLogin.module.css';
import { autenticar } from '@/app/lib/actions';
import { useSearchParams, useRouter } from 'next/navigation';

export default function FormLogin() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';

	async function handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData(e.target);
		const dados = { usuario: formData.get('usuario'), senha: formData.get('senha') };
		const res = await autenticar(dados);

		if (res.ok) {
			router.push(callbackUrl);
		}
	}

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<div className={styles.entradas}>
				<Entrada nome='usuario'>EMAIL OU CNPJ</Entrada>
				<Entrada nome='senha' tipo='password'>SENHA</Entrada>
			</div>

			<BotaoForm tipo='submit'>ENTRAR</BotaoForm>
		</form>
	);
}