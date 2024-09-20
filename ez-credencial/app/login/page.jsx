import Separador from "@/app/components/Separador";
import Entrada from "@/app/components/Entrada";
import styles from "@/styles/Login.module.css";
import FormLogin from "../components/FormLogin";

export const metadata = {
  title: 'Login',
};

export default function Login() {
  return (
    <div className={styles.container}>
      <Separador>LOGIN</Separador>

      <FormLogin />

      <div className={styles.cadastroContainer}>
        <div className={styles.cadastro}>
          <Separador tipo='button'>CADASTRAR</Separador>
        </div>
      </div>
    </div>
  );
}