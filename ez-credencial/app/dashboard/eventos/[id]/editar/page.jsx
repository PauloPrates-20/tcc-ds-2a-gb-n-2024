import Image from 'next/image';
import icon from '@/public/assets/evento.png';
import styles from '@/styles/AddEvento.module.css';
import FormEvento from '@/app/components/FormEvento';
import { auth } from '@/auth';
import { lerEvento } from '@/app/lib/firebase/firestoreQuerys';

export const metadata = {
    title: 'Novo Evento',
};

export default async function EditarEvento({ params }) {
    const session = await auth();
    const idUsuario = session.user.id;
    const queryEvento = await lerEvento(idUsuario, params.id);
    let evento = null;

    if (queryEvento.status) {
        evento = queryEvento.evento;
    }

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
            <FormEvento editar={true} idEvento={evento.id} dados={evento.dados} />
        </div>
    );
}