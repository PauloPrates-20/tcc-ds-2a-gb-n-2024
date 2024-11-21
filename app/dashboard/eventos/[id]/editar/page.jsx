import FormEvento from '@/app/components/FormEvento';
import { auth } from '@/auth';
import { lerEvento } from '@/app/lib/firebase/firestoreQuerys';
import Etiqueta from '@/app/components/Etiqueta';

export const metadata = {
    title: 'Editar Evento',
};

export default async function EditarEvento({ params }) {
    const session = await auth();
    const idUsuario = session.user.id;
    const queryEvento = await lerEvento(params.id);
    let evento = null;

    if (queryEvento.status) {
        evento = queryEvento.evento;
    }

    return (
    <div className={`container`}>
            <div className={`cardForm`}>
                <Etiqueta>Evento</Etiqueta>
                <FormEvento editar={true} idEvento={evento.id} idUsuario={idUsuario} dados={evento.dados} />
            </div>
        </div>
    );
}