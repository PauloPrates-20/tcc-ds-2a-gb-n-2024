import Moldura from '@/app/components/Moldura';
import BotaoNav from '@/app/components/BotaoNav';
import styles from '@/styles/Evento.module.css';
import { auth } from '@/auth';
import { lerEvento } from '@/app/lib/firebase/firestoreQuerys';

export default async function Evento({ params }) {
	const session = await auth();
	const idUsuario = session.user.id;
	const queryEvento = await lerEvento(idUsuario, params.id);
	let evento = null;

	if (queryEvento.status) {
		evento = queryEvento.evento;
	}

	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<div className={styles.moldura}>
					<Moldura titulo='EVENTO' voltar={true} idEvento={evento?.id} idUsuario={idUsuario}>
						<h1>{evento?.dados?.nome}</h1>
						<p>DATA: {evento?.dados?.horario}</p>
						<p>Local: {evento?.dados?.local}</p>
					</Moldura>
				</div>
				<div className={styles.moldura}>
					<Moldura titulo='FUNCIONÁRIOS'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores adipisci minima consectetur aspernatur ea, dolor nesciunt. Omnis eaque obcaecati odit explicabo adipisci, provident dolorum ipsa deserunt. Rem saepe perferendis optio nisi corporis voluptates fuga ab vel a cum blanditiis repellat, pariatur nostrum nobis dolore! Nam quasi distinctio magnam sunt inventore neque illo in commodi, aspernatur et doloribus vero repudiandae dolores, voluptatem voluptatum mollitia. Beatae esse, voluptas nesciunt recusandae debitis, qui amet sed eum eius tenetur facere consectetur porro ea quaerat voluptate unde molestiae ipsum, commodi sit necessitatibus! Debitis similique, voluptates sequi quos impedit cupiditate doloremque provident, error beatae quisquam libero.</Moldura>
				</div>
			</div>
			<div className={styles.actions}>
				<BotaoNav url=''>COMPARTILHAR</BotaoNav>
				<BotaoNav url={`/dashboard/relatorios/${evento?.id}`}>RELATÓRIOS</BotaoNav>
			</div>
		</div>
	);
}