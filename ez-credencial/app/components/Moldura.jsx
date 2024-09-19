import { FaPenToSquare, FaRegTrashCan } from "react-icons/fa6";

import Separador from "./Separador";
import styles from "@/styles/Moldura.module.css";


export default function Moldura({ titulo, children }) {
    return (
        <div className={styles.detalhes}>
            <Separador>{titulo}</Separador>
            <div className={styles.texto}>
                <p>{children}</p>
            </div>
            <div className={styles.icons}>
                <p>
                    EXCLUIR
                    <FaRegTrashCan />
                </p>
                <p>
                    EDITAR
                    <FaPenToSquare />
                </p>
            </div>
        </div>
    );
}