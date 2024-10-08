import styles from '@/styles/BotaoForm.module.css';

export default function BotaoForm({ children, tipo }) {
	return (
		<button type={tipo ? tipo : 'button'} className={styles.button}>
			{children}
		</button>
	);
}