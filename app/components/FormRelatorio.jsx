'use client';

import styles from '@/styles/FormRelatorio.module.css';
import { errorHandling } from '@/app/lib/errorHandling';
import { adicionarRelatorio } from '../lib/actions';
import Swal from 'sweetalert2';

export default function FormRelatorio({ evento }) {
    async function handleSubmit(e) {
		e.preventDefault();

		const formData = new FormData(e.target);
		const relatorio = formData.get('obs');
		const resposta = await adicionarRelatorio(evento.id, relatorio);

		if (!resposta.status) {
			const erros = await errorHandling(resposta.erros);
			Swal.fire({
				icon: 'error',
				title: 'Não foi possível salvar as observações!',
				text: erros[0],
				customClass: {
					popup: 'swal',
				},
			});
			return;
		}

		Swal.fire({
			icon: 'success',
			title: resposta?.mensagem,
			customClass: {
				popup: 'swal',
			},
		});
	} 

    return (
        <form onSubmit={handleSubmit} id='obs' className={styles.label}>
            <div>
                <p>Observações:</p>
                <textarea name='obs' className={styles.textArea} maxLength={150} defaultValue={evento?.dados?.relatorio || ''} />
            </div>
        </form>
    );
}