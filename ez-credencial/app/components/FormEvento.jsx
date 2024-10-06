'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { criarEvento, editarEvento } from '../lib/actions';
import styles from '@/styles/FormEvento.module.css';
import Entrada from './Entrada';
import BotaoForm from './BotaoForm';
import BotaoNav from './BotaoNav';

export default function FormEvento({ editar, idEvento, idUsuario, dados }) {
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
				const url = editar ? (dashboard ? '/dashboard' : `/dashboard/eventos/${idEvento}`) : '/dashboard';
				const resposta = editar ? await editarEvento(idUsuario, idEvento, dadosEvento, dashboard) : await criarEvento(idUsuario, dadosEvento);


        if (!resposta.status) {
            console.error(resposta.mensagem ? resposta.mensagem : resposta);
            return;
        }

        console.log(resposta.mensagem);
        router.push(url);
    }
    
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.entradas}>
                <Entrada 
                    nome='nome' 
                    valor={editar ? dados.nome : null}
                >
                    NOME DO EVENTO
                </Entrada>
                <Entrada 
                    nome='horario'
                    valor={editar ? dados.horario : null}
                >
                    DATA
                </Entrada>
                <Entrada 
                    nome='local'
                    valor={editar ? dados.local : null}
                >
                    LOCAL
                </Entrada>
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