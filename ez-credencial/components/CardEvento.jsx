import { FaRegTrashCan, FaRegPenToSquare} from "react-icons/fa6";

import styles from "@/styles/CardEvento.module.css";

export default function CardEvento({ evento }) {
    return (
        <div className={styles.moldura}>
            <p className={styles.titulo}>{evento.nome}</p>
            <div className={styles.acoes}>
                <FaRegTrashCan />
                <FaRegPenToSquare />
            </div>
        </div>
    );
}