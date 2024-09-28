import Image from 'next/image';
import icon from '@/public/assets/evento.png';
import styles from '@/styles/AddEvento.module.css';
import FormEvento from '@/app/components/FormEvento';

export const metadata = {
    title: 'Novo Evento',
};

export default function EditarEvento({ params }) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Image 
                    src={icon}
                    width={128}
                    alt='Logo'
                />
                <p>EVENTO</p>
            </div>
            <FormEvento editar={true} idEvento={params.id} />
        </div>
    );
}