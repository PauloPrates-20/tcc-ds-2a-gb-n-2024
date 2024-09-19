'use client';

import styles from '@/styles/FormCadastro.module.css';
import Entrada from './Entrada';
import Separador from './Separador';
import { cadastrar } from '../lib/actions';


export default function FormCadastro() {
    async function handleSubmit(e) {
        e.preventDefault();

        const formulario = new FormData(e.target);
        const dados = {};
        for (const [key, value] of formulario.entries()) {
            dados[key] = value;
        }
        
        const resp = await cadastrar(dados)
        
        console.log(resp);
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit} className={styles.formRow}>
            <div className={styles.form}>
                <Entrada nome='email'>EMAIL</Entrada>
                <Entrada nome='senha' tipo="password">SENHA</Entrada>
                <Entrada nome='confirmarSenha' tipo="password">CONFIRMAR SENHA</Entrada>
                <Entrada nome='nome'>NOME</Entrada>
                <Entrada nome='cnpj'>CNPJ</Entrada>
                <Entrada nome='telefone'>TELEFONE</Entrada>
            </div>
            <Separador tipo="submit">CADASTRAR</Separador>
        </form>
    );
}