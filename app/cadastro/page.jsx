import Image from 'next/image';
import styles from '@/styles/Cadastro.module.css';
import icon from '@/public/assets/cadastro-empresa.png';
import FormCadastro from '../components/FormCadastro';

export const metadata = {
    title: 'Cadastro',
};

export default function Cadastro() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Image 
                    src={icon}
                    width={180}
                    alt="Logo"
                />
                <p>CADASTRO</p>
            </div>
            <FormCadastro />
        </div>
    );
}