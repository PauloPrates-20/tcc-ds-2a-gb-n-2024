'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { criarEvento } from '../lib/actions';
import styles from '@/styles/FormEvento.module.css';
import Entrada from './Entrada';
import BotaoForm from './BotaoForm';
import BotaoNav from './BotaoNav';

export default function FormEvento({ editar, idEvento, idUsuario }) {
    const searchParams = useSearchParams();
    const dashboard = searchParams.get('dashboard') || false;
    const router = useRouter();

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const dadosEvento = {
            horario: formData.get('horario'),
            local: formData.get('local'),
            nome: formData.get('nome'), 
        };
        if (editar) {
        }

        const resposta = await criarEvento(idUsuario, dadosEvento);

        if (!resposta.status) {
            console.error(resposta.mensagem ? resposta.mensagem : resposta);
            return;
        }

        console.log(resposta.mensagem);
        router.push('/dashboard');
    }
    
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.entradas}>
                <Entrada nome='nome'>NOME DO EVENTO</Entrada>
                <Entrada nome='horario'>DATA</Entrada>
                <Entrada nome='local'>LOCAL</Entrada>
            </div>
            {editar ? (
                <>
                    <BotaoForm tipo='submit'>SALVAR</BotaoForm>
                    <BotaoNav url={dashboard ? '/dashboard' : `/dashboard/eventos/${idEvento}`}>CANCELAR</BotaoNav>
                </>
            ) : (
                <BotaoForm tipo='submit'>ADICIONAR EVENTO</BotaoForm>
            )}
        </form>
    );
}