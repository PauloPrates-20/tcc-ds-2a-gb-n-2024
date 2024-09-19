import styles from "@/styles/Entrada.module.css";

export default function Entrada({ nome, tipo, children, disable }) {
  let input = (
    <input className={styles.entrada} type='text' placeholder={children} name={nome} />
  );

  if (disable) {
    input = (
      <input className={styles.entrada} placeholder={children} name={nome} disabled />
    );
  }

  if (tipo) {
    input = (
      <input className={styles.entrada} type={tipo} placeholder={children} name={nome} />
    );

    if (disable) {
      <input className={styles.entrada} type={tipo} placeholder={children} name={nome} disabled />
    }
  }

  return input;
}