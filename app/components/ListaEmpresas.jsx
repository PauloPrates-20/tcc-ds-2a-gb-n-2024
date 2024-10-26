import { lerEmpresas } from '../lib/firebase/firestoreQuerys';
import BotaoCompartilhar from './BotaoCompartilhar';
import BotaoExcluir from './BotaoExcluir';
import styles from '@/styles/ListaEmpresas.module.css';

export default async function ListaEmpresas({ idEvento, codigo }) {
	const queryEmpresas = await lerEmpresas(idEvento);
	const empresas = queryEmpresas.status ? queryEmpresas.empresas : null;

	return (
		<table className={styles.table}>
			<thead className={styles.header}>
				<tr>
					<th>EMPRESA</th>
					<th>CNPJ</th>
				</tr>
			</thead>
			<tbody>
				{empresas?.length > 0 && empresas.map(empresa => (
					<tr key={empresa.id}>
						<td>{empresa.dados.nome}</td>
						<td>{empresa.dados.cnpj}</td>
						<td>
							<BotaoExcluir cor='#fff' idEvento={idEvento} idEmpresa={empresa.id} tipoAlvo='empresa' />
							<BotaoCompartilhar cor='#fff' codigo={codigo} idEvento={idEvento} />
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}