// import styles from "@/styles/Home.module.css";
import CardEvento from '@/components/CardEvento';
import usuario from '@/public/teste-usuario';

export default function Dashboard() {
  return (
    <>
      {usuario.hasOwnProperty('id') && usuario.eventos.map(evento => (
        <CardEvento evento={evento} />
      ))}  
    </>
  );
}
