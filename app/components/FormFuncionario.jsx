'use client';

import Entrada from './Entrada';
import BotaoForm from './BotaoForm';
import styles from '@/styles/FormFuncionario.module.css';
import mascara from '../lib/masks';

export default function FormFuncionario({ nomeEmpresa, editar = false }) {
    mascara('cpf', '000.000.000-00');
    mascara('idade', '00/00/0000');

    return (
        <form className={styles.formRow}>
            <div className={styles.form}>
                <Entrada nome='empresa' disable={!editar} valor={nomeEmpresa} />
                <Entrada nome='nome'>NOME</Entrada>
                <Entrada nome='cargo'>CARGO</Entrada>
                <Entrada nome='idade'>DATA DE NASCIMENTO</Entrada>
                <Entrada nome='cpf'>CPF</Entrada>
                <Entrada nome='email'>EMAIL</Entrada>
            </div>
            <BotaoForm tipo="submit">ADICIONAR FUNCIONÁRIO</BotaoForm>
        </form>
    );
}