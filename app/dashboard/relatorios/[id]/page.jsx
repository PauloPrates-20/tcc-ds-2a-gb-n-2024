import Etiqueta from '@/app/components/Etiqueta';
import styles from '@/styles/Relatorio.module.css';
import Moldura from '@/app/components/Moldura';
import { lerEvento, lerFuncionarios } from '@/app/lib/firebase/firestoreQuerys';
import BotaoForm from '@/app/components/BotaoForm';
import FormRelatorio from '@/app/components/FormRelatorio';

export default async function Relatorio({ params }) {
	const queryEvento = await lerEvento(params.id)
	const queryFuncionarios = await lerFuncionarios(params.id)
	let evento;
	let funcionarios;

	if (queryEvento.status) {
		evento = queryEvento.evento;
	}

	if (queryFuncionarios.status) {
		funcionarios = queryFuncionarios.funcionarios;
	}

	return (
		<div className={styles.container}>
			<div className={`cardForm ${styles.card}`}>
				<div className={styles.header}>
					<h1>RELATÓRIO</h1>
				</div>
				<Etiqueta>Evento: {evento?.dados.nome}</Etiqueta>
				<BotaoForm tipo='submit' form='obs' >SALVAR</BotaoForm>
			</div>
			<Moldura titulo='DETALHES DO EVENTO'>
				<p>
					O evento será realizado no(a) {evento?.dados?.local} na data de {evento?.dados?.data} com
					participação dos funcionários: {funcionarios.map((funcionario, index) => 
						index < funcionarios.length - 1 ? funcionario.dados.nome + ', ' : funcionario.dados.nome
					)}
				</p>
				<FormRelatorio evento={evento} />
			</Moldura>
		</div>
	);
}