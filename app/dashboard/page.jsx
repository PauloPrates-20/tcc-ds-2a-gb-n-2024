import CardEvento from '@/app/components/CardEvento';
import Etiqueta from '@/app/components/Etiqueta';
import BotaoNav from '../components/BotaoNav';
import { FaRegPenToSquare } from 'react-icons/fa6'
import styles from '@/styles/Dashboard.module.css';
import CardRelatorio from '@/app/components/CardRelatorio';
import { auth } from '@/auth';
import { lerEventos } from '../lib/firebase/firestoreQuerys';

export const metadata = {
  title: 'Dashboard',
};

export default async function Dashboard() {
  const session = await auth();
  const idUsuario = session.user.id;
  const queryEventos = await lerEventos(idUsuario);
  let eventos;

  if (queryEventos.status) {
    eventos = queryEventos.eventos;
  }

  return (
    <div className={styles.container}>
      <BotaoNav url='/dashboard/adicionar-evento'>ADICIONAR EVENTO <FaRegPenToSquare /></BotaoNav>

      <div className={styles.listas}>
        {eventos && eventos.map((evento) => (
          <CardEvento key={evento.id} evento={evento} idUsuario={idUsuario} />
        ))}  
      </div>

			{!!eventos && (
				<>
					<Etiqueta>RELATÓRIOS</Etiqueta>
					<div className={styles.listas}>
						{eventos && eventos.map((evento) => (
							<CardRelatorio key={evento.id} titulo={evento.dados.nome} idEvento={evento.id} />
						))}
					</div>
				</>
			)}
    </div>
  );
}
