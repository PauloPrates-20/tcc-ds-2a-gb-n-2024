import Entrada from '@/app/components/Entrada';
import BotaoForm from '@/app/components/BotaoForm';
import Etiqueta from '@/app/components/Etiqueta';
import styles from '@/styles/Convite.module.css';

export default function Convite() {
    return (
        <div className={styles.container}> 
            <div className={styles.header}>
                <Etiqueta>INSIRA O CÓDIGO</Etiqueta>
            </div>
            <Entrada>Ex: 3ff817s87a878ds</Entrada>
            <BotaoForm tipo="submit">VERIFICAR CÓDIGO</BotaoForm>
        </div>
    );
}