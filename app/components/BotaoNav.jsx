import styles from '@/styles/BotaoNav.module.css';
import Link from 'next/link';

export default function BotaoNav({ children, url }) {
	return (
		<Link className={styles.button} href={url}>
			{children}
		</Link>
	);
}