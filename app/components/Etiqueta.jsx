import styles from '@/styles/Etiqueta.module.css';

export default function Etiqueta({ children, corFundo, corTexto }) {
	return (
		<p style={{ backgroundColor: corFundo ? corFundo : '#2c6a68', color: corTexto ? corTexto : '#fff' }} className={styles.tag}>
			{children}
		</p>
	);
}