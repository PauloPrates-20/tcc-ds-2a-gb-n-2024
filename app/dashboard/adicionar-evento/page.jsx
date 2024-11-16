import styles from '@/styles/AddEvento.module.css';
import FormEvento from '@/app/components/FormEvento';
import { auth } from '@/auth';
import Etiqueta from '@/app/components/Etiqueta';

export const metadata = {
    title: 'Novo Evento',
};

export default async function AddEvento() {
    const session = await auth();
    const idUsuario = session.user.id;

    return (
        <div className={`container`}>
            <div className={`cardForm`}>
                <Etiqueta>Evento</Etiqueta>
                <FormEvento idUsuario={idUsuario} />
            </div>
        </div>
    );
}