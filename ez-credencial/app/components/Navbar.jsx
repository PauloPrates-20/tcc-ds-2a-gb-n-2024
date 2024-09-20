'use client';

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
                <li className={styles.logo}>Logo</li>
                <li>
                    <Link className={styles.link} href="/dashboard">Início</Link>
                </li>
            </div>
            <li>
							<Logout />
            </li>
        </ul>
    </nav>
    );

    if (pathname === '/login' || pathname === '/cadastro' || /^\/eventos\/[^/]+\/convite$/.test(pathname)) {
        componente = (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.logo}>Logo</li>
                <li>
                    <Link className={styles.link} href="/login">Início</Link>
                </li>
            </ul>
        </nav>
        );
    }
    return componente;
}