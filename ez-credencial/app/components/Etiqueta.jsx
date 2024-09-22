import styles from "@/styles/Etiqueta.module.css";

export default function Separador({ children }) {
	return (
		<p className={styles.tag}>{children}</p>
	);
}