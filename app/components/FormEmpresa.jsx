'use client';

import Entrada from './Entrada';
import BotaoForm from './BotaoForm';
import styles from '@/styles/FormPadrao.module.css';
import { cadastrarEmpresa } from '../lib/actions';

export default function FormEmpresa({ idEvento }) {
    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const dadosEmpresa = { nome: formData.get('empresa'), cnpj: formData.get('cnpj') };
        const resposta = await cadastrarEmpresa(idEvento, dadosEmpresa);

        if (!resposta.status) {
            console.error(resposta.erros);
            return;
        }

        console.log(resposta.mensagem);
    }
    return (
        <form onSubmit={handleSubmit} className={styles.form}> 
            <div className={styles.entradas}>
                <Entrada nome='empresa'>EMPRESA</Entrada>
                <Entrada nome='cnpj'>CNPJ</Entrada>
            </div>
            <BotaoForm tipo='submit'>CADASTRAR</BotaoForm>
        </form>
    );
}