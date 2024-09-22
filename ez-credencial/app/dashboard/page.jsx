import CardEvento from '@/app/components/CardEvento';
import Etiqueta from '@/app/components/Etiqueta';
import BotaoNav from '../components/BotaoNav';
import usuario from '@/public/teste-usuario';
import { FaRegPenToSquare } from 'react-icons/fa6'
import styles from '@/styles/Dashboard.module.css';
import CardRelatorio from '@/app/components/CardRelatorio';

export const metadata = {
  title: 'Dashboard',
};

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <BotaoNav url='/dashboard/adicionar-evento'>Adicionar evento <FaRegPenToSquare /></BotaoNav>

      <div className={styles.listas}>
        {usuario.hasOwnProperty('id') && usuario.eventos.map((evento, index) => (
          <CardEvento key={index} evento={evento} />
        ))}  
      </div>

			{usuario.relatorios.length > 0 && (
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
