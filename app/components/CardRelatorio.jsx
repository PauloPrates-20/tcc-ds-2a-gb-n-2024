import { FaRegFileLines } from 'react-icons/fa6';

import styles from '@/styles/CardRelatorio.module.css';
import Link from 'next/link';

export default function CardRelatorio({ titulo, idEvento }) {
  return (
    <Link href={`/dashboard/relatorios/${idEvento}`} className={styles.moldura}>
      <p>Relatório</p>
      <p className={styles.titulo}>{titulo}</p>
      <FaRegFileLines className={styles.icone} />
    </Link>
  );
}