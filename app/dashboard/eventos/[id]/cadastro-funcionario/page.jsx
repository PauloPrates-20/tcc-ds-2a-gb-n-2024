import styles from '@/styles/Funcionario.module.css';
import FormFuncionario from '@/app/components/FormFuncionario';
import { auth } from '@/auth';
import Moldura from '@/app/components/Moldura';
import ListaFuncionarios from '@/app/components/ListaFuncionarios';
import Etiqueta from '@/app/components/Etiqueta';

export default async function CadastroFuncionario({ params }) {
    const session = await auth();
    const usuario = session.user;

    return (
        <div className={styles.container}>
            <div className={`cardForm`}>
                <Etiqueta>Funcionário</Etiqueta>
                <FormFuncionario nomeEmpresa={usuario.name} idEvento={params.id} idEmpresa={usuario.id} />
            </div>
            <Moldura titulo='FUNCIONARIOS'>
                <ListaFuncionarios idEvento={params.id} idEmpresa={usuario.id} />
            </Moldura>
        </div>
    );
}