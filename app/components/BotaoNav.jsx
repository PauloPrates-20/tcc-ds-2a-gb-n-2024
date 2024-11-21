import Link from 'next/link';

export default function BotaoNav({ children, url }) {
	return (
		<Link className={`button`} href={url}>
			{children}
		</Link>
	);
}