'use client';

import { FaRegTrashCan, FaRegPenToSquare, FaRegFolderOpen } from 'react-icons/fa6';
import styles from '@/styles/CardEvento.module.css';
import Link from 'next/link';
import { deletarEvento } from '../lib/actions';

export default function CardEvento({ evento, idUsuario }) {
    async function handleClick() {
        const resposta = await deletarEvento(idUsuario, evento.id);
        console.log(resposta);
    }

    return (
        <div className={styles.moldura}>
            <p>{evento.dados.nome}</p>
            <div className={styles.acoes}>
                <button onClick={handleClick} className={styles.icone}>
                    <FaRegTrashCan title='EXCLUIR' />
                </button>
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