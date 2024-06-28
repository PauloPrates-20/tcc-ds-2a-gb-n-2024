import Link from 'next/link';

import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li className={styles.logo}>Logo</li>
                <li>
                    <Link className={styles.link} href="/dashboard">Início</Link>
                </li>
            </ul>
        </nav>
    );
}