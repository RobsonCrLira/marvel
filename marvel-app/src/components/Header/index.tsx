import styles from './styles.module.scss';

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <img src="/Marvel_logo.svg" alt="Podcastr" />
        </header>
    )
}