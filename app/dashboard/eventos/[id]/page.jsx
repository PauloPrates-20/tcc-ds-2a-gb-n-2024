import Moldura from '@/app/components/Moldura';
import BotaoNav from '@/app/components/BotaoNav';
import styles from '@/styles/Evento.module.css';
import { auth } from '@/auth';
import { lerEvento } from '@/app/lib/firebase/firestoreQuerys';

export default async function Evento({ params }) {
	const session = await auth();
	const idUsuario = session.user.id;
	const queryEvento = await lerEvento(params.id);
	let evento = null;

	if (queryEvento.status) {
		evento = queryEvento.evento;
	}

	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<div className={styles.moldura}>
					<Moldura titulo='EVENTO' evento={true} idEvento={evento?.id} idUsuario={idUsuario}>
						<h1>{evento?.dados?.nome}</h1>
						<p>DATA: {evento?.dados?.data}</p>
						<p>Local: {evento?.dados?.local}</p>
					</Moldura>
				</div>
				<div className={styles.moldura}>
					<Moldura titulo='FUNCIONÁRIOS'>
						<p>Reservado para a lista de funcionários</p>
					</Moldura>
				</div>
			</div>
			<div className={styles.actions}>
				<BotaoNav url={`/dashboard/eventos/${evento?.id}/compartilhar`}>COMPARTILHAR</BotaoNav>
				<BotaoNav url={`/dashboard/relatorios/${evento?.id}`}>RELATÓRIOS</BotaoNav>
			</div>
		</div>
	);
}