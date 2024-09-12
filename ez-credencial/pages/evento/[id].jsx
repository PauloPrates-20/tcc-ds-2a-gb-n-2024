import Moldura from "@/components/Moldura";
import Separador from "@/components/Separador";
import styles from "@/styles/Evento.module.css";

export default function Evento() {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.moldura}>
                    <Moldura titulo="EVENTO">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem deleniti optio voluptates maiores quod asperiores ratione, odit nihil. Dignissimos modi fugiat, libero, repellendus optio blanditiis nostrum corrupti facere accusantium laudantium a voluptates veritatis dolorem distinctio ducimus error nisi voluptatem odio cumque, harum voluptate quibusdam! Similique voluptatem nobis, laborum vel quia amet autem repudiandae architecto temporibus minima asperiores a obcaecati, praesentium perferendis corrupti perspiciatis illum dignissimos rerum, quisquam blanditiis deleniti! Corrupti nemo maiores quisquam dolorem totam. Odit atque itaque aliquam veritatis totam repellendus esse modi, sunt, natus rem aspernatur praesentium, quasi laborum quaerat explicabo officiis velit! Ad, in hic. Aspernatur, eligendi?</Moldura>
                </div>
                <div className={styles.moldura}>
                    <Moldura titulo="FUNCIONÁRIOS">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores adipisci minima consectetur aspernatur ea, dolor nesciunt. Omnis eaque obcaecati odit explicabo adipisci, provident dolorum ipsa deserunt. Rem saepe perferendis optio nisi corporis voluptates fuga ab vel a cum blanditiis repellat, pariatur nostrum nobis dolore! Nam quasi distinctio magnam sunt inventore neque illo in commodi, aspernatur et doloribus vero repudiandae dolores, voluptatem voluptatum mollitia. Beatae esse, voluptas nesciunt recusandae debitis, qui amet sed eum eius tenetur facere consectetur porro ea quaerat voluptate unde molestiae ipsum, commodi sit necessitatibus! Debitis similique, voluptates sequi quos impedit cupiditate doloremque provident, error beatae quisquam libero.</Moldura>
                </div>
            </div>
            <div className={styles.actions}>
                <Separador tipo='button'>COMPARTILHAR</Separador>
                <Separador tipo='button'>RELATÓRIOS</Separador>
            </div>
        </div>
    );
}