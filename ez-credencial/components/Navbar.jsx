import Link from 'next/link';

import styles from '@/styles/Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <div className={styles.nav}>
                    <li className={styles.logo}>Logo</li>
                    <li>
                        <Link className={styles.link} href="/dashboard">Início</Link>
                    </li>
                </div>
                <li>
                    <button className={styles.button}>Log Out</button>
                </li>
            </ul>
        </nav>
    );
}