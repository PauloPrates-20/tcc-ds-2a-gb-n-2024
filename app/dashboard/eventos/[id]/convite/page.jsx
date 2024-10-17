import Etiqueta from '@/app/components/Etiqueta';
import FormLoginEmpresa from '@/app/components/FormLoginEmpresa';
import styles from '@/styles/Convite.module.css';

export default function Convite({ params }) {
    return (
        <div className={styles.container}> 
            <div className={styles.header}>
                <Etiqueta>CONVITE</Etiqueta>
            </div>

            <FormLoginEmpresa idEvento={params.id} />
        </div>
    );
}