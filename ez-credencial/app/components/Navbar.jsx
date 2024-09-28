'use client';

import icon from '@/public/assets/logo2.png';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';
import { usePathname } from 'next/navigation';
import Logout from './Logout';

export default function Navbar() {
    const pathname = usePathname();
    let componente = (
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
                <li className={styles.link}>
                    <Link className={styles.link} href="/dashboard">Início</Link>
                </li>
            </div>
            <li className={styles.nav}>
				<Logout />
            </li>
        </ul>
    </nav>
    );

    if (pathname === '/login' || pathname === '/cadastro' || /^\/eventos\/[^/]+\/convite$/.test(pathname)) {
        componente = (
        <nav className={styles.navbar}>
            <ul>
                <li>
									<Link href='/login'>
                    <Image 
                        src={icon}
                        width={64}
                        height={64}
                        alt=''
                    />
									</Link>
                </li>
                <li>
                    <Link className={styles.link} href="/login">Início</Link>
                </li>
            </ul>
        </nav>
        );
    }
    return componente;
}