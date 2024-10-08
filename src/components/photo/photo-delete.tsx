import photoDelete from '@/actions/photo-delete';
import { useState } from 'react';
import styles from './photo-delete.module.css';

export default async function PhotoDelete({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);

    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      await photoDelete(id);
    }

    setLoading(false);
  }

  return (
    <>
      {loading ? (
        <button disabled className={styles.delete}>
          Deletar
        </button>
      ) : (
        <button className={styles.delete} onClick={handleClick}>
          Deletar
        </button>
      )}
    </>
  );
}
