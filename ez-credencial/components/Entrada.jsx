import styles from "@/styles/Entrada.module.css";

export default function Entrada({ tipo, children}) {
  let input = (
    <input className={styles.entrada} type='text' placeholder={children} />
  );

  if (tipo) {
    input = (
      <input className={styles.entrada} type={tipo} placeholder={children} />
    );
  }

  return input;
}