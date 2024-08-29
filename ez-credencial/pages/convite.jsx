import Entrada from '@/components/Entrada';
import Separador from '@/components/Separador';

import styles from '@/styles/Convite.module.css';

export default function Convite() {
    return (
        <div className={styles.container}> 
            <div className={styles.header}>
                <Separador>INSIRA O CÓDIGO</Separador>
            </div>
            <Entrada>Ex: 3ff817s87a878ds</Entrada>
            <Separador tipo="button">VERIFICAR CÓDIGO</Separador>
        </div>
    );
}