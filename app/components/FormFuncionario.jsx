'use client';

import Entrada from './Entrada';
import BotaoForm from './BotaoForm';
import styles from '@/styles/FormFuncionario.module.css';
import mascara from '../lib/masks';
import { cadastrarFuncionário } from '../lib/actions';

export default function FormFuncionario({ nomeEmpresa, idEvento, idEmpresa, editar = false }) {
    mascara('cpf', '000.000.000-00');
    mascara('idade', '00/00/0000');

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const dadosFuncionario = {
            empresa: formData.get('empresa') ?? nomeEmpresa,
            nome: formData.get('nome'),
            cargo: formData.get('cargo'),
            idade: formData.get('idade'),
            cpf: formData.get('cpf'),
            email: formData.get('email'),
        };

        const resposta = await cadastrarFuncionário(idEvento, dadosFuncionario, idEmpresa);

        if (!resposta.status) {
            console.error(resposta.erros);
            return;
        }

        console.log(resposta.mensagem);
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit} className={styles.formRow}>
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