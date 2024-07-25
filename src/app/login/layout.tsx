import styles from './login.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.login}>
      <div className={styles.forms}>{children}</div>
    </div>
  );
}
