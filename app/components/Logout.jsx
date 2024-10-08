import styles from '@/styles/Logout.module.css';
import { deslogar } from '../lib/actions';

export default function Logout() {
	return (
	<form action={deslogar}>
		<button className={styles.logout}>Log Out</button>
	</form>
	);
}