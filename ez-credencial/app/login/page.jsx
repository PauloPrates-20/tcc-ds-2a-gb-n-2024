import Etiqueta from '@/app/components/Etiqueta';
import BotaoNav from '../components/BotaoNav';
import styles from '@/styles/Login.module.css';
import FormLogin from '../components/FormLogin';

export const metadata = {
  title: 'Login',
};

export default function Login() {
  return (
    <div className={styles.container}>
      <Etiqueta>LOGIN</Etiqueta>

      <FormLogin />

      <div className={styles.cadastroContainer}>
        <div className={styles.cadastro}>
          <BotaoNav url='/cadastro'>CADASTRAR</BotaoNav>
        </div>
      </div>
    </div>
  );
}