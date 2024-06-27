import CardEvento from '@/components/CardEvento';
import Separador from '@/components/Separador';
import usuario from '@/public/teste-usuario';

import { FaRegPenToSquare } from 'react-icons/fa6'

import styles from "@/styles/Home.module.css";

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
    </div>
  );
}
