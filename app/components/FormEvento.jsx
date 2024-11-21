'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { criarEvento, editarEvento } from '../lib/actions';
import styles from '@/styles/FormPadrao.module.css';
import Entrada from './Entrada';
import BotaoForm from './BotaoForm';
import BotaoNav from './BotaoNav';
import mascara from '../lib/masks';
import { errorHandling } from '../lib/errorHandling';
import Swal from 'sweetalert2';

export default function FormEvento({ editar, idEvento, idUsuario, dados }) {
    const searchParams = useSearchParams();
    const dashboard = searchParams.get('dashboard') || false;
    const router = useRouter();

    mascara('data', '00/00/0000');

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const dadosEvento = {
            data: formData.get('data'),
            local: formData.get('local'),
            nome: formData.get('nome'), 
        };
				const url = editar ? (dashboard ? '/dashboard' : `/dashboard/eventos/${idEvento}`) : '/dashboard';
				let resposta;

				if (editar) {
					let result = await Swal.fire({
						icon: 'question',
						title: 'Deseja salvar as alterações?',
						showConfirmButton: true,
						showDenyButton: true,
						showCancelButton: true,
						confirmButtonText: 'Salvar',
						denyButtonText: 'Não salvar',
						cancelButtonText: 'Cancelar',
						customClass: {
							popup: 'swal'
						},
					});

					if (result.isConfirmed) {
						resposta = await editarEvento(idEvento, dadosEvento, dashboard);
					} else if (result.isDenied) {
						result = await Swal.fire({
							title: 'Alterações descartadas!',
							icon: 'info',
							customClass: {
								popup: 'swal',
							},
						});
						
						if (result.isConfirmed || result.isDismissed) router.push(url);
						return;
					} else {
						return;
					}
				} else {
					resposta = await criarEvento(idUsuario, dadosEvento);
				}

        if (!resposta?.status) {
            const erros = await errorHandling(resposta.erros);
            Swal.fire({
							icon: 'error',
							title: editar ? 'Não foi possível editar o evento!' : 'Não foi possível criar o evento',
							text: erros[0],
							customClass: {
								popup: 'swal',
							},
						});
            return;
        }

        const dialog = await Swal.fire({
					icon: 'success',
					title: resposta.mensagem,
					customClass: {
						popup: 'swal',
					},
				});

				e.target.reset();
        if (dialog.isConfirmed || dialog.isDismissed) router.push(url);
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
                    nome='data'
                    valor={editar ? dados.data : null}
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