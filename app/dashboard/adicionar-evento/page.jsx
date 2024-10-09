import Image from 'next/image';
import icon from '@/public/assets/evento.png';
import styles from '@/styles/AddEvento.module.css';
import FormEvento from '@/app/components/FormEvento';
import { auth } from '@/auth';

export const metadata = {
    title: 'Novo Evento',
};

export default async function AddEvento() {
    const session = await auth();
    const idUsuario = session.user.id;

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
            <FormEvento idUsuario={idUsuario} />
        </div>
    );
}