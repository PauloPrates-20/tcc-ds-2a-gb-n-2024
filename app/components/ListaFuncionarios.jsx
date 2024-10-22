import { lerFuncionarios } from '../lib/firebase/firestoreQuerys';
import BotaoExcluir from './BotaoExcluir';
import styles from '@/styles/ListaFuncionarios.module.css';

export default async function ListaFuncionarios({ idEvento, idEmpresa }) {
	const queryFuncionarios = idEmpresa ? await lerFuncionarios(idEvento, idEmpresa) : await lerFuncionarios(idEvento);
	const funcionarios = queryFuncionarios.status ? queryFuncionarios.funcionarios : null;

	return (
		<ul className={styles.lista}>
			{funcionarios?.length > 0 && funcionarios.map(funcionario => (
				<li className={styles.item} key={funcionario.id}>
					<div className={styles.dados}>
						<span>{funcionario.dados.nome}</span>
						<span>{funcionario.dados.cargo}</span>
                        <span>{funcionario.dados.cpf}</span>
					</div>
					<div className={styles.acoes}>
						<BotaoExcluir cor='#fff' idEvento={idEvento} idFuncionario={funcionario.id} tipoAlvo='funcionario' />
					</div>
				</li>
			))}
		</ul>
	);
}