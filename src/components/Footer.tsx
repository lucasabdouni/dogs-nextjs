import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src={'/assets/dogs-footer.svg'}
        alt="dogs"
        width={28}
        height={22}
      />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
}
