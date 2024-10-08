import FormEmpresa from '@/app/components/FormEmpresa';
import Etiqueta from '@/app/components/Etiqueta';
import Moldura from '@/app/components/Moldura';
import styles from '@/styles/Compartilhar.module.css';

export default function Compartilhar({ params }) {
    return (
        <div className={styles.container}>
            <div className={styles.form}>
                <Etiqueta>CADASTRO DE EMPRESAS  </Etiqueta>
                <FormEmpresa idEvento={params.id} />
            </div>
            <Moldura titulo='Empresas'>
                <p>Reservado para a lista de empresas</p>
            </Moldura>
        </div>
    );
}