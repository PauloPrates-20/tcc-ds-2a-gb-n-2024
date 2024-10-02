'use client';

import { FaRegTrashCan, FaRegPenToSquare, FaRegFolderOpen } from 'react-icons/fa6';

import styles from '@/styles/CardEvento.module.css';
import Link from 'next/link';

export default function CardEvento({ evento }) {
    return (
        <div className={styles.moldura}>
            <p>{evento.nome}</p>
            <div className={styles.acoes}>
                <FaRegTrashCan title='EXCLUIR' className={styles.icone} />
                <Link title='VISUALIZAR' className={styles.icone} href={`/dashboard/eventos/${evento.id}`}>
                    <FaRegFolderOpen />
                </Link>
                <Link title='EDITAR' href={`/dashboard/eventos/${evento.id}/editar?dashboard=true`}>
                    <FaRegPenToSquare className={styles.icone} />
                </Link>
            </div>
        </div>
    );
}