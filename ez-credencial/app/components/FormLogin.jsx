import Entrada from './Entrada';
import Separador from './Separador';
import styles from '@/styles/FormLogin.module.css';

export default function FormLogin() {
	return (
		<form className={styles.form}>
			<div className={styles.entradas}>
				<Entrada nome='usuario'>EMAIL OU CNPJ</Entrada>
				<Entrada nome='senha' tipo='password'>SENHA</Entrada>
			</div>

			<Separador tipo='submit'>ENTRAR</Separador>
		</form>
	);
}