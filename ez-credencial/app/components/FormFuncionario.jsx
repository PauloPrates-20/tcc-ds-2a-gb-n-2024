'use client';

import Entrada from './Entrada';
import Separador from './Separador';
import styles from '@/styles/FormFuncionario.module.css';

export default function FormFuncionario() {
    return (
        <form className={styles.formRow}>
            <div className={styles.form}>
                <Entrada disable={true}>CREDENCIAL</Entrada>
                <Entrada>NOME</Entrada>
                <Entrada>CARGO</Entrada>
                <Entrada tipo="number">IDADE</Entrada>
                <Entrada>CPF</Entrada>
                <Entrada>EMAIL</Entrada>
            </div>
            <Separador tipo="button">ADICIONAR FUNCIONÁRIO</Separador>
        </form>
    );
}