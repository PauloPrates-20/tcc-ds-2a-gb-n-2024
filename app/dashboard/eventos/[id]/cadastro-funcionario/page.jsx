import Image from 'next/image';
import styles from '@/styles/Funcionario.module.css';
import icon from '@/public/assets/cadastro-funcionario.png';
import FormFuncionario from '@/app/components/FormFuncionario';
import { auth } from '@/auth';
import Moldura from '@/app/components/Moldura';
import ListaFuncionarios from '@/app/components/ListaFuncionarios';

export default async function CadastroFuncionario({ params }) {
    const session = await auth();
    const usuario = session.user;

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Image 
                    src={icon}
                    width={180}
                    alt='Logo'
                />
                <p>FUNCIONARIO</p>
            </div>
            <div className={styles.main}>
                <FormFuncionario nomeEmpresa={usuario.name} idEvento={params.id} />
                <Moldura titulo='FUNCIONARIOS'>
                    <ListaFuncionarios idEvento={params.id} idEmpresa={usuario.id} />
                </Moldura>
            </div>
        </div>
    );
}