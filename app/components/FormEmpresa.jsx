import Entrada from './Entrada';
import BotaoForm from './BotaoForm';
import styles from '@/styles/FormPadrao.module.css';

export default function FormEmpresa() {
    return (
        <form className={styles.form}> 
            <div className={styles.entradas}>
                <Entrada nome='empresa'>EMPRESA</Entrada>
                <Entrada nome='cnpj'>CNPJ</Entrada>
            </div>
            <BotaoForm tipo='submit'>CADASTRAR</BotaoForm>
        </form>
    );
}