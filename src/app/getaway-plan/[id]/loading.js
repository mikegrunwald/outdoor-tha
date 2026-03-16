import styles from "./page.module.css";

export default function Loading() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.main} />
      </div>
    </main>
  );
}
