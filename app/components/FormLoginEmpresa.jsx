'use client';

import Entrada from './Entrada';
import BotaoForm from './BotaoForm';
import styles from '@/styles/FormPadrao.module.css';
import { useRouter } from 'next/navigation';
import { autenticar } from '../lib/actions';
import mascara from '../lib/masks';
import { errorHandling } from '../lib/errorHandling';

export default function FormLoginEmpresa({ idEvento }) {
    const router = useRouter();
    mascara('cnpj', '00.000.000/0000-00');

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const dadosEmpresa = {
            cnpj: formData.get('cnpj'),
            codigo: formData.get('codigo'), 
            idEvento: idEvento,
            convidado: true,
        };
        const resposta = await autenticar(dadosEmpresa);

		if (resposta.ok) {
			router.push(`/dashboard/eventos/${idEvento}/cadastro-funcionario`);
            return;
		}

        if (!resposta?.status) {
            const erros = await errorHandling(resposta.erros);
            window.alert(erros);
            return;
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}> 
            <div className={styles.entradas}>
                <Entrada nome='cnpj'>CNPJ</Entrada>
                <Entrada nome='codigo' tipo='password'>Ex: 3ff8909A</Entrada>
            </div>
            <BotaoForm tipo='submit'>VERIFICAR CÓDIGO</BotaoForm>
        </form>
    );
}