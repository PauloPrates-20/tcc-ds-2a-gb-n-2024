'use client';

import icon from '@/public/assets/logo2.png';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';
import { usePathname } from 'next/navigation';
import Logout from './Logout';

export default function Navbar() {
	const pathname = usePathname();
	const urlInicio = pathname.includes('/dashboard') ? '/dashboard' : '/login';
	console.log(pathname);
	return (
		<nav className={styles.navbar}>
			<ul>
				<div className={styles.nav}>
					<li>
						<Link className={styles.link} href={urlInicio}>Início</Link>
					</li>
				</div>
				<li>
					<Image
						src={icon}
						width={64}
						height={64}
						alt=''
					/>
				</li>
				<li>
					{pathname === '/login' ? (
						<Link className={styles.link} href='/cadastro'>Cadastro</Link>
					) : pathname === '/cadastro' ? (
						<Link className={styles.link} href='/login'>Login</Link>
					) : /^\/dashboard\/eventos\/[^/]+\/convite$/.test(pathname) ? (
						<Link className={styles.link} href='/login'>Login</Link>
					) : (
						<Logout />
					)}
				</li>
			</ul>
		</nav>
	);
}