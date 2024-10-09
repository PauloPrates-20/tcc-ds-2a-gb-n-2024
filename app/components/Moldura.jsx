import { FaPenToSquare, FaRegFolderClosed } from 'react-icons/fa6';
import Etiqueta from './Etiqueta';
import styles from '@/styles/Moldura.module.css';
import Link from 'next/link';
import BotaoExcluir from './BotaoExcluir';

export default function Moldura({ titulo, children, idEvento, idUsuario, evento = false }) {
    return (
        <div className={styles.detalhes}>
            <Etiqueta corFundo='#fff' corTexto='#2c6a68'>{titulo}</Etiqueta>
            <div className={styles.texto}>
                <div>{children}</div>
            </div>
            {evento && (
                <div className={styles.icons}>
                    <BotaoExcluir idEvento={idEvento} tipoAlvo='evento' />
                    <Link title='VOLTAR' href='/dashboard'>
                        <FaRegFolderClosed />
                    </Link>
                    <Link title='EDITAR' href={`/dashboard/eventos/${idEvento}/editar`}>
                        <FaPenToSquare />
                    </Link>
                </div>
            )}
        </div>
    );
}