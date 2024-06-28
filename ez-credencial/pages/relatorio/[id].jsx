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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque facilis, velit aliquam vel recusandae nam labore reprehenderit quo libero deleniti fugiat delectus, veniam soluta ipsum pariatur aut quam assumenda exercitationem sit. Aut exercitationem facilis unde earum incidunt assumenda iste eum id! Quasi assumenda itaque aperiam obcaecati repellat alias perspiciatis non aliquam, magni sunt sit culpa consequuntur ratione, saepe dolor libero ducimus officia ut ullam? Voluptate nisi debitis sint unde obcaecati culpa harum alias, voluptates maiores tenetur nesciunt praesentium itaque reiciendis eligendi rerum esse quo, laborum dolor et laudantium libero! At laborum a ratione nulla voluptatem sequi illum magnam voluptas aspernatur ad placeat consequuntur cumque distinctio, animi mollitia cupiditate ipsum, labore corrupti, nisi iure. Iste, provident excepturi? Officiis aliquam deserunt dicta earum reprehenderit sint nam, architecto culpa asperiores aspernatur officia omnis maxime quis provident porro tempore excepturi similique perferendis dolores amet nostrum recusandae. Esse autem natus officiis iure, dignissimos, laborum possimus, sapiente ducimus magni et odit explicabo aliquam animi inventore ratione officia! Sapiente aliquam corrupti rerum est consectetur quisquam mollitia saepe explicabo dolorum. Repellat nam itaque accusantium temporibus numquam, omnis facilis porro cumque sunt eius fuga. Esse ad saepe mollitia dolores voluptate quod assumenda, cumque eos, recusandae optio, dolor sequi. Impedit aliquid enim fuga ad, ratione, ut facilis alias veniam officiis perspiciatis dolore soluta provident illo tenetur magni reiciendis laborum consectetur sapiente rem omnis laboriosam voluptate quidem, incidunt recusandae. Praesentium harum, quisquam dolorem reprehenderit a et alias totam placeat ad quaerat sed quidem beatae ipsa! Veniam nostrum molestiae deleniti quod, ipsum iusto deserunt quaerat quibusdam magnam quis minus at vel maiores voluptas aperiam quam laudantium sit esse assumenda consequatur eius repellat. Mollitia aliquam, reprehenderit vitae architecto magni reiciendis delectus distinctio maxime minus voluptate excepturi esse officia iure, natus quaerat officiis atque sequi fuga nulla sed! Nostrum veritatis totam impedit labore dolorem odio ipsam ad provident, iure, reiciendis recusandae eaque expedita atque at doloremque, veniam tenetur nesciunt quibusdam et. Eligendi ducimus reprehenderit esse, iste dolor ex consequuntur fugiat sit inventore ad non aut illo impedit perferendis, nam debitis quis quae? Reiciendis suscipit expedita consequuntur repellat! Inventore at aliquid necessitatibus possimus ipsum doloremque maiores sequi itaque facere minima vero voluptatem laudantium est, culpa perspiciatis unde, velit modi laborum nostrum tenetur obcaecati similique amet deleniti? Harum voluptate impedit dicta veniam? Fugiat, eum suscipit beatae est doloremque perspiciatis sed, quasi maiores excepturi exercitationem commodi id nesciunt. Doloribus laborum recusandae aperiam debitis pariatur adipisci, perspiciatis id omnis veniam, quos accusantium voluptas nemo possimus placeat ullam ex suscipit fugiat doloremque ratione maxime, repellendus eum! Repellat dolore, quod, harum est cum, facere omnis tempore laborum sint exercitationem sapiente perspiciatis explicabo iste debitis voluptatibus aliquid voluptate minus! Dolorem iusto veniam magni odit vero assumenda. Hic illum ipsa maxime omnis iusto facere? Consequatur similique iure, quas provident, in perspiciatis, incidunt ad nisi itaque repellat cumque tempora cupiditate voluptates laboriosam porro aperiam hic explicabo eum? Pariatur soluta expedita mollitia voluptas sit dolorem, ex error at a rerum quas dolore nam laudantium itaque quisquam. Adipisci assumenda culpa nobis, est sit accusamus veniam!</p>
            </div>
        </div>
    );
}