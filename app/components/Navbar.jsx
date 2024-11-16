'use client';

import icon from '@/public/assets/logo2.png';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';
import { usePathname } from 'next/navigation';
import Logout from './Logout';

export default function Navbar() {
    const pathname = usePathname();
		return (
			<nav className={styles.navbar}>
				<ul>
					<div className={styles.nav}>
						<li>
							<Link href='/dashboard'>
								<Image 
									src={icon}
									width={64}
									height={64}
									alt=''
								/>
							</Link>
						</li>
						{(pathname !== '/login' && pathname !== '/cadastro' && !/^\/dashboard\/eventos\/[^/]+\/convite$/.test(pathname)) && (
							<li>
								<Link className={styles.link} href='/dashboard'>Início</Link>
							</li>
						)}
					</div>
					<li>
						{(pathname === '/login' || pathname === '/cadastro' || /^\/dashboard\/eventos\/[^/]+\/convite$/.test(pathname)) ? (
							<Link className={styles.link} href='/login'>Início</Link>
						) : (
							<Logout />
						)}
					</li>
				</ul>
			</nav>
		);
}