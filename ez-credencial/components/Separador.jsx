import styles from "@/styles/Separador.module.css";

export default function Separador({ children, tipo}) {
    let componente = (
        <p className={styles.tag}>{children}</p>
    );

    if (tipo) {
        componente = (
            <button type={tipo} className={styles.button}>
                {children}
            </button>
        );
    }

    return componente;
}