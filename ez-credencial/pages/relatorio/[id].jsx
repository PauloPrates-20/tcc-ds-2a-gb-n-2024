import Image from "next/image";
import Separador from "@/components/Separador";
import Moldura from "@/components/Moldura";

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
            <Separador>DESCRIÇÃO DO EVENTO</Separador>
            <div className={styles.texto}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita repellat similique maiores odit deserunt ex nulla enim magnam consequuntur veritatis nostrum culpa, praesentium laborum aut ullam quidem dolorem ipsam corporis a magni, iusto quis tenetur earum! Porro perferendis impedit quae sit, odio quisquam adipisci itaque. Nesciunt magnam culpa asperiores quam quas tenetur, beatae quae quod dolore rem rerum dolores voluptas cupiditate praesentium aperiam eligendi inventore corporis at repellendus pariatur corrupti consequuntur, error esse deleniti! Eos aspernatur tempore architecto modi assumenda exercitationem cumque laudantium et delectus accusamus consectetur illum quisquam accusantium, repellat est nostrum aliquam voluptatem quidem ab itaque dolorum aut officia minima. Eum exercitationem, eligendi, repudiandae vitae officia molestiae blanditiis laudantium aliquid magni minus, veniam ullam et est corporis earum. Earum, eum quod totam nam optio aspernatur fuga asperiores quisquam. Error totam nesciunt tempore libero, quo possimus odit quod mollitia rerum nobis, eligendi enim esse minus pariatur. Distinctio, similique! Nam aliquid sint nulla, corporis dignissimos dolorem quae similique expedita reprehenderit placeat voluptatibus beatae possimus necessitatibus cumque molestiae perspiciatis veniam repudiandae itaque voluptatum officiis. Ducimus architecto vel nisi! Ex veniam minima commodi deleniti officiis dolorem, repellendus nemo dolor suscipit, omnis impedit ab vero iure quod, est asperiores voluptate tempore praesentium neque a quo? Aperiam, harum enim quidem, sit veniam sint dignissimos fugiat commodi eos cum perferendis cupiditate maiores provident? Fuga beatae temporibus voluptatum ipsam blanditiis autem unde quisquam earum illum, exercitationem quibusdam dolor iure optio amet quam doloribus id tempora doloremque fugit! Veritatis temporibus ea modi quasi accusantium quaerat qui et deleniti doloribus quos, soluta animi quis nisi. Explicabo, illo consectetur? Facere temporibus, eius nobis aliquam pariatur quo eos culpa facilis enim. Aperiam amet, odit officiis ea doloribus consequatur dignissimos suscipit neque tempore quas minus! Eos officia, obcaecati unde dolorum dignissimos, impedit quod necessitatibus soluta ipsam veritatis consectetur possimus. Unde sed, possimus earum eligendi commodi obcaecati id consequatur recusandae. Tempora libero dicta assumenda. Debitis tenetur magnam, adipisci quibusdam, molestias laborum quisquam nemo nisi deserunt nam repudiandae eveniet ipsam laboriosam nobis sapiente voluptatibus quasi quam aliquam corrupti, inventore dolore totam dignissimos necessitatibus! Excepturi quaerat autem voluptatem laborum praesentium. Delectus dolor quidem rem consequatur deleniti est ipsam, laborum porro inventore impedit ex voluptatum natus, doloremque unde et recusandae mollitia amet nesciunt accusamus, harum nihil? Vel doloribus optio voluptatem minima beatae nulla ea mollitia! Assumenda molestias corporis labore reprehenderit veritatis fugiat. Repudiandae ullam eaque impedit enim obcaecati sapiente magnam sed cum tempore rerum perspiciatis quam debitis neque minus incidunt dolor porro nisi, facilis eveniet quo illum? Est porro, animi quam ullam accusantium, quos placeat ex dolores natus illum modi nemo, distinctio praesentium veritatis ducimus delectus odit architecto blanditiis. Cumque molestias optio et quasi aut alias aliquid iusto officia recusandae inventore sunt dolore totam tempora, cupiditate pariatur omnis mollitia ipsum aspernatur iste ullam numquam fugit quisquam corporis? Molestiae quam nostrum autem ea dolor iusto deserunt libero maiores ipsa animi sapiente natus similique fuga cupiditate iure tenetur expedita error officiis fugiat fugit neque nisi, omnis dolorem. Ex facere assumenda veniam quas aliquam deleniti cumque necessitatibus harum?</p>
            </div>
        </div>
        </div>
    );
}