import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={styles.header_components}>
      <h1 className={styles.header_titulo}>🍔 AuFood</h1>

      <nav className={styles.header_nav}>
        <Link to="/" className={styles.nav_button}>Início</Link>
        <Link to="/produtos" className={styles.nav_button}>Produtos</Link>
        <Link to="/carrinho" className={styles.nav_button}>Carrinho</Link>
      </nav>
    </div>
  );
}

export default Header;
