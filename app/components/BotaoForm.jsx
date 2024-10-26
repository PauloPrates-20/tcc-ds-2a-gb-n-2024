import styles from '@/styles/BotaoForm.module.css';

export default function BotaoForm({ children, tipo, form }) {
	return (
		<button type={tipo ? tipo : 'button'} form={form} className={styles.button}>
			{children}
		</button>
	);
}