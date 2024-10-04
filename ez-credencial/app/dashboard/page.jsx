import CardEvento from '@/app/components/CardEvento';
import Etiqueta from '@/app/components/Etiqueta';
import BotaoNav from '../components/BotaoNav';
import usuario from '@/public/teste-usuario';
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
  const { id } = session.user;
  const eventos = await lerEventos(id);

  return (
    <div className={styles.container}>
      <BotaoNav url='/dashboard/adicionar-evento'>Adicionar evento <FaRegPenToSquare /></BotaoNav>

      <div className={styles.listas}>
        {eventos.map((evento) => (
          <CardEvento key={evento.id} evento={evento} idUsuario={id} />
        ))}  
      </div>

			{usuario?.relatorios?.length > 0 && (
				<>
					<Etiqueta>Relatórios</Etiqueta>
					<div className={styles.listas}>
						{usuario.relatorios.map((relatorio, index) => (
							<CardRelatorio key={index} titulo={usuario.eventos.find(evento => evento.id === relatorio.evento).nome} />
						))}
					</div>
				</>
			)}
    </div>
  );
}
