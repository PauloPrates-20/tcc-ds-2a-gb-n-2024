import { lerFuncionarios } from '../lib/firebase/firestoreQuerys';
import BotaoExcluir from './BotaoExcluir';
import styles from '@/styles/ListaFuncionarios.module.css';

export default async function ListaFuncionarios({ idEvento, idEmpresa }) {
	const queryFuncionarios = idEmpresa ? await lerFuncionarios(idEvento, idEmpresa) : await lerFuncionarios(idEvento);
	const funcionarios = queryFuncionarios.status ? queryFuncionarios.funcionarios : null;

	return (
		<table className={styles.table}>
			<thead>
				<tr className={styles.header}>
					<th>NOME</th>
					<th>CARGO</th>
					<th>CPF</th>
				</tr>
			</thead>
			<tbody>
				{funcionarios?.length > 0 && funcionarios.map(funcionario => (
					<tr className={styles.dados} key={funcionario.id}>
						<td>{funcionario.dados.nome}</td>
						<td>{funcionario.dados.cargo}</td>
						<td>{funcionario.dados.cpf}</td>
						<td className={styles.acoes}><BotaoExcluir cor='#fff' idEvento={idEvento} idFuncionario={funcionario.id} tipoAlvo='funcionario' /></td>
					</tr>
				))}
			</tbody>
		</table>
	);
}