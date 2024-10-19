import Image from 'next/image';
import styles from '@/styles/Cadastro.module.css';
import icon from '@/public/assets/cadastro-funcionario.png';
import FormFuncionario from '@/app/components/FormFuncionario';
import { auth } from '@/auth';

export default async function CadastroFuncionario() {
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
            <FormFuncionario nomeEmpresa={usuario.name} />
        </div>
    );
}