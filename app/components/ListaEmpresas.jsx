import { lerEmpresas } from '../lib/firebase/firestoreQuerys';
import BotaoCompartilhar from './BotaoCompartilhar';
import BotaoExcluir from './BotaoExcluir';
import styles from '@/styles/ListaEmpresas.module.css';

export default async function ListaEmpresas({ idEvento, codigo }) {
	const queryEmpresas = await lerEmpresas(idEvento);
	const empresas = queryEmpresas.status ? queryEmpresas.empresas : null;

	return (
		<ul className={styles.lista}>
			{empresas.map(empresa => (
				<li className={styles.item} key={empresa.id}>
					<div className={styles.dados}>
						<span>{empresa.dados.nome}</span>
						<span>{empresa.dados.cnpj}</span>
					</div>
					<div className={styles.acoes}>
						<BotaoExcluir cor='#fff' idEvento={idEvento} idEmpresa={empresa.id} tipoAlvo='empresa' />
						<BotaoCompartilhar cor='#fff' codigo={codigo} idEvento={idEvento} />
					</div>
				</li>
			))}
		</ul>
	);
}