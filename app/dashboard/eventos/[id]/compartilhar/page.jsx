import FormEmpresa from '@/app/components/FormEmpresa';
import Etiqueta from '@/app/components/Etiqueta';
import Moldura from '@/app/components/Moldura';
import styles from '@/styles/Compartilhar.module.css';
import ListaEmpresas from '@/app/components/ListaEmpresas';
import { lerEvento } from '@/app/lib/firebase/firestoreQuerys';

export default async function Compartilhar({ params }) {
	const queryEvento = await lerEvento(params.id);
	const evento = queryEvento.status ? queryEvento.evento : null;

    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <Etiqueta>CADASTRO DE EMPRESAS</Etiqueta>
                <FormEmpresa idEvento={evento.id} />
            </div>
            <Moldura titulo='Empresas'>
                <ListaEmpresas idEvento={evento.id} codigo={evento.dados.codigo} />
            </Moldura>
        </div>
    );
}