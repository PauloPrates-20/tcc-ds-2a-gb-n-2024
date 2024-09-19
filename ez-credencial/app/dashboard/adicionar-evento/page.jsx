import Image from "next/image";

import Entrada from "@/app/components/Entrada";
import Separador from "@/app/components/Separador";

import icon from "@/public/assets/evento.png";

import styles from "@/styles/AddEvento.module.css";

export default function AddEvento() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Image 
                    src={icon}
                    width={128}
                    alt="Logo"
                />
                <p>EVENTO</p>
            </div>
            <div>
                <Entrada>NOME DO EVENTO</Entrada>
                <Entrada>DATA</Entrada>
                <Entrada>LOCAL</Entrada>
            </div>
            <Separador tipo="button">ADICIONAR EVENTO</Separador>
        </div>
    );
}