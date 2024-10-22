import { lerFuncionarios } from '../lib/firebase/firestoreQuerys';
import BotaoExcluir from './BotaoExcluir';
import styles from '@/styles/ListaFuncionarios.module.css';

export default async function ListaFuncionarios({ idEvento }) {
	const queryFuncionarios = await lerFuncionarios(idEvento);
	const funcionarios = queryFuncionarios.status ? queryFuncionarios.funcionarios : null;

	return (
		<ul className={styles.lista}>
			{funcionarios.map(funcionario => (
				<li className={styles.item} key={funcionario.id}>
					<div className={styles.dados}>
						<span>{funcionario.dados.nome}</span>
						<span>{funcionario.dados.cargo}</span>
                        <span>{funcionario.dados.cpf}</span>
					</div>
					<div className={styles.acoes}>
						<BotaoExcluir cor='#fff' idEvento={idEvento} idfuncionario={funcionario.id} tipoAlvo='funcionario' />
					</div>
				</li>
			))}
		</ul>
	);
}