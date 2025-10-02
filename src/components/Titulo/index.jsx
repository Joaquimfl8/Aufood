import styles from './Titulo.module.css';

function Titulo({ texto = "Bem-vindo ao AuFood!" }) {
  return (
    <div className={styles.titulo_container}>
      <h2 className={styles.titulo_texto}>{texto}</h2>
    </div>
  );
}

export default Titulo;
