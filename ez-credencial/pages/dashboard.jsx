import CardEvento from '@/components/CardEvento';
import Separador from '@/components/Separador';
import usuario from '@/public/teste-usuario';

import { FaRegPenToSquare } from 'react-icons/fa6'

import styles from "@/styles/Home.module.css";
import CardRelatorio from '@/components/CardRelatorio';

export default function Dashboard() {
  return (
    <div className={styles.container}>
      <Separador tipo='button'>Adicionar evento <FaRegPenToSquare /></Separador>

      <div className={styles.listas}>
        {usuario.hasOwnProperty('id') && usuario.eventos.map(evento => (
          <CardEvento key={evento.id} evento={evento} />
        ))}  
      </div>

      <Separador>Relatórios</Separador>
      {usuario.hasOwnProperty('id') && usuario.relatorios.map(relatorio => (
        <CardRelatorio key={relatorio.id} titulo={usuario.eventos.find(evento => evento.id === relatorio.evento).nome} />
      ))}
    </div>
  );
}
