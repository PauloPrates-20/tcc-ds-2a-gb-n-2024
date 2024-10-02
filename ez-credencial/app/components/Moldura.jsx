import { FaPenToSquare, FaRegTrashCan, FaRegFolderClosed } from "react-icons/fa6";

import Etiqueta from "./Etiqueta";
import styles from "@/styles/Moldura.module.css";
import Link from "next/link";


export default function Moldura({ titulo, children, voltar, idEvento }) {
    return (
        <div className={styles.detalhes}>
            <Etiqueta corFundo='#fff' corTexto='#2c6a68'>{titulo}</Etiqueta>
            <div className={styles.texto}>
                <p>{children}</p>
            </div>
            <div className={styles.icons}>
                <FaRegTrashCan title='EXCLUIR' />
                {voltar && (
                    <Link title='VOLTAR' href='/dashboard'>
                        <FaRegFolderClosed />
                    </Link>
                )}
                <Link title='EDITAR' href={`/dashboard/eventos/${idEvento}/editar`}>
                    <FaPenToSquare />
                </Link>
            </div>
        </div>
    );
}