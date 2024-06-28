import Image from "next/image";
import Entrada from "@/components/Entrada";

import styles from "@/styles/Cadastro.module.css";

import icon from "@/public/assets/cadastro-empresa.png";
import Separador from "@/components/Separador";

export default function Cadastro() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Image 
                    src={icon}
                    width={180}
                    alt="Logo"
                />
                <p>cadastro</p>
            </div>
            <div className={styles.form}>
                <Entrada>NOME</Entrada>
                <Entrada tipo="password">SENHA</Entrada>
                <Entrada tipo="password">CONFIRMAR SENHA</Entrada>
                <Entrada>CNPJ</Entrada>
                <Entrada>TELEFONE</Entrada>
                <Entrada>ENDEREÇO</Entrada>
            </div>
            <Separador tipo="button">CADASTRAR</Separador>
        </div>
    );
}