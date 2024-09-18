import Image from "next/image";
import Entrada from "@/components/Entrada";

import styles from "@/styles/Cadastro.module.css";

import icon from "@/public/assets/cadastro-empresa.png";
import Separador from "@/components/Separador";

export default function Cadastro() {
    function handleSubmit(e) {
        e.preventDefault();

        const formulario = new FormData(e.target);
        const dados = {};
        for (const [key, value] of formulario.entries()) {
            dados[key] = value;
        }
        console.log(dados);
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Image 
                    src={icon}
                    width={180}
                    alt="Logo"
                />
                <p>CADASTRO</p>
            </div>
            <form onSubmit={handleSubmit} className={styles.formRow}>
                <div className={styles.form}>
                    <Entrada nome='email'>EMAIL</Entrada>
                    <Entrada nome='senha' tipo="password">SENHA</Entrada>
                    <Entrada nome='confirmarSenha' tipo="password">CONFIRMAR SENHA</Entrada>
                    <Entrada nome='nome'>NOME</Entrada>
                    <Entrada nome='cnpj'>CNPJ</Entrada>
                    <Entrada nome='telefone'>TELEFONE</Entrada>
                </div>
                <Separador tipo="submit">CADASTRAR</Separador>
            </form>
        </div>
    );
}