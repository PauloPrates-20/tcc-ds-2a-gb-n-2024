'use client';

import Entrada from './Entrada';
import BotaoForm from './BotaoForm';
import styles from '@/styles/FormFuncionario.module.css';

export default function FormFuncionario({ editar = false }) {
    return (
        <form className={styles.formRow}>
            <div className={styles.form}>
                <Entrada nome='empresa' disable={!editar}>EMPRESA</Entrada>
                <Entrada nome='nome'>NOME</Entrada>
                <Entrada nome='cargo'>CARGO</Entrada>
                <Entrada nome='idade' tipo="number">IDADE</Entrada>
                <Entrada nome='cpf'>CPF</Entrada>
                <Entrada nome='email'>EMAIL</Entrada>
            </div>
            <BotaoForm tipo="submit">ADICIONAR FUNCIONÁRIO</BotaoForm>
        </form>
    );
}