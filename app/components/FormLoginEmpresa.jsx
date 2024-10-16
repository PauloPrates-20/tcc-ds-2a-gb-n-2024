'use client';

import Entrada from './Entrada';
import BotaoForm from './BotaoForm';
import styles from '@/styles/FormPadrao.module.css';

export default function FormLoginEmpresa({ idEvento }) {
    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const dadosEmpresa = { cnpj: formData.get('cnpj'), codigo: formData.get('codigo') };
        // const resposta = await cadastrarEmpresa(idEvento, dadosEmpresa);

        // if (!resposta.status) {
        //     console.error(resposta.erros);
        //     return;
        // }

        // console.log(resposta.mensagem);
	    e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}> 
            <div className={styles.entradas}>
                <Entrada nome='cnpj'>CNPJ</Entrada>
                <Entrada nome='codigo'>Ex: 3ff8909A</Entrada>
            </div>
            <BotaoForm tipo='submit'>VERIFICAR CÓDIGO</BotaoForm>
        </form>
    );
}