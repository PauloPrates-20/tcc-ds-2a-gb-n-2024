'use client';

import { useSearchParams } from 'next/navigation';
import styles from '@/styles/FormEvento.module.css';
import Entrada from './Entrada';
import BotaoForm from './BotaoForm';
import BotaoNav from './BotaoNav';

export default function FormEvento({ editar, idEvento }) {
    const searchParams = useSearchParams();
    const dashboard = searchParams.get('dashboard') || false;
    
    return (
        <form className={styles.form}>
            <div className={styles.entradas}>
                <Entrada>NOME DO EVENTO</Entrada>
                <Entrada>DATA</Entrada>
                <Entrada>LOCAL</Entrada>
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