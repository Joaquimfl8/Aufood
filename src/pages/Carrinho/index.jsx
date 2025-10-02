import Header from "../../components/Header";
import styles from "./Carrinho.module.css";
import { useState } from "react";

function Carrinho() {
  const [carrinho, setCarrinho] = useState([
    { nome: "Pizza Calabresa", preco: 29.90 },
    { nome: "X-Burger", preco: 19.90 },
    { nome: "Refrigerante", preco: 5.00 }
  ]);

  const removerItem = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
  };

  const total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h2>🛒 Carrinho de Compras</h2>

        {carrinho.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <>
            <ul className={styles.lista}>
              {carrinho.map((item, index) => (
                <li key={index} className={styles.item}>
                  <span>{item.nome} - R$ {item.preco.toFixed(2)}</span>
                  <button onClick={() => removerItem(index)}>Remover</button>
                </li>
              ))}
            </ul>

            <p className={styles.total}>Total: R$ {total.toFixed(2)}</p>
            <button className={styles.finalizar}>Finalizar Pedido</button>
          </>
        )}
      </div>
    </>
  );
}

export default Carrinho;
