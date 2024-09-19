import { FaAlignJustify } from "react-icons/fa6";

import styles from "@/styles/CardRelatorio.module.css";

export default function CardRelatorio({ titulo }) {
  return (
    <div className={styles.moldura}>
      <p>Relatório</p>
      <p className={styles.titulo}>{titulo}</p>
      <FaAlignJustify className={styles.icone} />
    </div>
  );
}