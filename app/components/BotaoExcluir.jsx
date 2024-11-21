'use client';

import { FaRegTrashCan } from 'react-icons/fa6';
import { deletarEmpresa, deletarEvento, deletarFuncionário } from '../lib/actions';
import { useRouter } from 'next/navigation';
import styles from '@/styles/BotaoExcluir.module.css';
import Swal from 'sweetalert2';
import { errorHandling } from '../lib/errorHandling';

export default function BotaoExcluir({ idEvento, idEmpresa, idFuncionario, tipoAlvo, cor }) {
	const router = useRouter();

	async function deletar() {
		let resposta;
		let dialog = await Swal.fire({
			title: `Deseja mesmo excluir o(a) ${tipoAlvo}?`,
			icon: 'question',
			showConfirmButton: true,
			showDenyButton: true,
			showCancelButton: false,
			confirmButtonText: 'Sim',
			denyButtonText: 'Não',
			customClass: {
				popup: 'swal',
			},
		});

		if (dialog.isConfirmed) {
			switch(tipoAlvo) {
				case 'evento':
					resposta = await deletarEvento(idEvento);
					break;
				case 'empresa':
					resposta = await deletarEmpresa(idEvento, idEmpresa);
					break;
				case 'funcionario':
					resposta = await deletarFuncionário(idEvento, idFuncionario);
					break;
			}

			if (!resposta?.status) {
				const erros = errorHandling(resposta.erros);
				Swal.fire({
					title: `Não foi possível excluir o(a) ${tipoAlvo}`,
					text: erros[0],
					icon: 'error',
					customClass: {
						popup: 'swal',
					},
				});

			}

			dialog = await Swal.fire({
				title: resposta?.mensagem,
				icon: 'success',
				customClass: {
					popup: 'swal',
				},
			});
			
			if ((dialog.isConfirmed || dialog.isDismissed) && tipoAlvo === 'evento') router.push('/dashboard')
		}
	}

	return (
		<button className={styles.icone} onClick={deletar}>
			<FaRegTrashCan style={{ color: cor ? cor : '#284144' }}/>
		</button>
	);
}