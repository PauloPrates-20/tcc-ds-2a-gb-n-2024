import Separador from "@/components/Separador";
import Entrada from "@/components/Entrada";

import styles from "@/styles/Login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <Separador>LOGIN</Separador>

      <div className={styles.entradas}>
        <Entrada>EMAIL</Entrada>
        <Entrada tipo='password'>SENHA</Entrada>
      </div>

      <Separador tipo='button'>ENTRAR</Separador>

      <div className={styles.cadastroContainer}>
        <div className={styles.cadastro}>
          <Separador tipo='button'>CADASTRAR</Separador>
        </div>
      </div>
    </div>
  );
}