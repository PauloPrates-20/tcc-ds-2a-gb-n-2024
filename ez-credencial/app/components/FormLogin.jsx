import { logar } from '../lib/actions';
import Entrada from './Entrada';
import Separador from './Separador';
import styles from '@/styles/FormLogin.module.css';
import { signIn } from '@/auth';

export default function FormLogin() {
	return (
		<form action={async (formData) => {
			'use server'
			const dados = { usuario: formData.get('usuario'), senha: formData.get('senha') };
			await signIn('credentials', { ...dados, redirectTo: '/dashboard' });
		}} className={styles.form}>
			<div className={styles.entradas}>
				<Entrada nome='usuario'>EMAIL OU CNPJ</Entrada>
				<Entrada nome='senha' tipo='password'>SENHA</Entrada>
			</div>

			<Separador tipo='submit'>ENTRAR</Separador>
		</form>
	);
}