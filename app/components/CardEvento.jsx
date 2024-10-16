'use client';

import { FaRegPenToSquare, FaRegFolderOpen } from 'react-icons/fa6';
import styles from '@/styles/CardEvento.module.css';
import Link from 'next/link';
import BotaoExcluir from './BotaoExcluir';

export default function CardEvento({ evento }) {
    return (
        <div className={styles.moldura}>
            <p>{evento.dados.nome}</p>
            <div className={styles.acoes}>
                <BotaoExcluir idEvento={evento.id} tipoAlvo='evento' />
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