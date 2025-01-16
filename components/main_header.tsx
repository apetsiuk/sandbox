import Link from 'next/link';
import styles from './main_header.module.css';


export default function MainHeader() {
    return <>
        <div className={styles.top_menu}>
            <nav>
                <ul>
                    <li><Link href="/"><b>Aliaksei Petsiuk</b></Link></li>
                    <li><Link href="/research">Research</Link></li>
                    <li><Link href="/projects">Projects</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/design">Design</Link></li>
                </ul>
            </nav>
        </div>
    </>
}