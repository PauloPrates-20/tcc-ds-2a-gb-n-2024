import Image from "next/image";
import Entrada from "@/components/Entrada";

import styles from "@/styles/Cadastro.module.css";

import icon from "@/public/assets/cadastro-funcionario.png";
import Separador from "@/components/Separador";

export default function CadastroFuncionario() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Image 
                    src={icon}
                    width={180}
                    alt="Logo"
                />
                <p>FUNCIONARIO</p>
            </div>
            <div className={styles.form}>
                <Entrada disable={true}>CREDENCIAL</Entrada>
                <Entrada>NOME</Entrada>
                <Entrada>CARGO</Entrada>
                <Entrada tipo="number">IDADE</Entrada>
                <Entrada>CPF</Entrada>
                <Entrada>EMAIL</Entrada>
            </div>
            <Separador tipo="button">ADICIONAR FUNCIONÁRIO</Separador>
        </div>
    );
}