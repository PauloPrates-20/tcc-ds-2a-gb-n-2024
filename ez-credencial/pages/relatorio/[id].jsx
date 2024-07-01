import Image from "next/image";
import Separador from "@/components/Separador";

import icon from "@/public/assets/relatorio.png";

import styles from "@/styles/Relatorio.module.css";

export default function Relatorio() {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.header}>
                    <Image 
                        src={icon}
                        width={148}
                        alt="Logo"
                    />
                    <h1>RELATÓRIO</h1>
                </div>
                <Separador>Evento: nome</Separador>
            </div>
            <div className={styles.detalhes}>
                <Separador>Descrição do evento</Separador>
                <div className={styles.texto}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt praesentium deserunt error, laudantium temporibus fuga natus architecto unde ullam aliquam enim aut vel, totam, pariatur officia consequatur! Ab perspiciatis esse ipsam cum quidem! Sint libero quos aliquid pariatur. Odio iure corporis atque a magni beatae deleniti maiores quisquam veritatis cumque earum id amet commodi facilis alias ducimus eveniet quia temporibus porro, et ad delectus soluta. Debitis, quos neque culpa, dolores quae ut sequi eius similique aliquam corporis laudantium in sit dolor enim aspernatur reprehenderit expedita, explicabo voluptates possimus alias nihil exercitationem nobis? Eaque voluptatem eos ullam ipsam doloribus voluptas, ad sunt eum exercitationem molestias iste necessitatibus sit assumenda ipsa quia corporis officiis aspernatur. Saepe quo, enim dolorem eius rem, minima eligendi ipsa dignissimos sed pariatur dolorum! Quo magni vero, est quod deleniti ad. Blanditiis ipsum nobis velit quia eum assumenda corrupti ipsa quam molestiae animi consequatur aliquam repellat rem aut eveniet adipisci harum repudiandae ad, atque provident repellendus ducimus quasi. Itaque ipsam nisi tempora quasi laboriosam consectetur eos, dolorem, beatae harum porro est. Cupiditate, itaque beatae quaerat tempora expedita reiciendis fugiat! Esse voluptatem quaerat distinctio deserunt voluptates quod eveniet ad obcaecati dolorum eligendi, accusamus ullam facilis officiis. Odit veniam quas dolor et vero molestiae! Quos voluptate tenetur excepturi! Maxime labore quod dolor nihil esse in expedita, tempore repellendus quaerat, eveniet eos. Illo, beatae at quos ex eligendi ipsam porro debitis dolorum sint expedita cum tenetur nemo consequuntur eius, autem, dolores voluptate unde quo nam illum odit architecto accusamus. Libero, repellat?</p>
                </div>
            </div>
        </div>
    );
}