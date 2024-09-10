import styles from "@/styles/Entrada.module.css";

export default function Entrada({ tipo, children, disable }) {
  let input = (
    <input className={styles.entrada} type='text' placeholder={children} />
  );

  if (disable) {
    input = (
      <input className={styles.entrada} placeholder={children} disabled />
    );
  }

  if (tipo) {
    input = (
      <input className={styles.entrada} type={tipo} placeholder={children} />
    );

    if (disable) {
      <input className={styles.entrada} type={tipo} placeholder={children} disabled />
    }
  }

  return input;
}