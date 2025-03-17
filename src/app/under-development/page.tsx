import styles from './style.module.css';

export default function UnderDevelopment() {
    return (
      <div className={styles.container}>
      <div className={styles.banner}>
        <div className={styles.icon}>🚧</div>
        <h1 className={styles.heading}>Under Development</h1>
        <p className={styles.text}>I'm working on this website. Please check back later!</p>
      </div>
    </div>
    )
}