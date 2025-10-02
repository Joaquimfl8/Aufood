import Header from "../../components/Header";
import Titulo from "../../components/Titulo";
import Card_Products from "../../components/Cards_Products";
import styles from "./Produtos.module.css";

function Produtos() {
  const listaProdutos = [
    {
      ProductTitle: "Pizza Calabresa",
      ProductImg: "https://blog.novasafra.com.br/wp-content/uploads/2016/01/accb7d_37d37d9f1001e88384dafc6e5cc60c4f.jpg_1024.jpg",
      ProductDescript: "Pizza com calabresa, cebola e queijo",
      ProductPrice: "29.90"
    },
    {
      ProductTitle: "X-Burger",
      ProductImg: "https://cantina.portalmachadodeassis.com.br/wp-content/uploads/2023/03/unnamed-file-13.jpg",
      ProductDescript: "Hambúrguer artesanal com queijo e bacon",
      ProductPrice: "19.90"
    },
    {
      ProductTitle: "Refrigerante",
      ProductImg: "https://upload.wikimedia.org/wikipedia/commons/2/27/Coca_Cola_Flasche_-_Original_Taste.jpg",
      ProductDescript: "Coca-Cola gelada 350ml",
      ProductPrice: "5.00"
    }
  ];

  return (
    <>
      <Header />
      <Titulo texto="Cardápio AuFood 🍽️" />
      <div className={styles.produtos_container}>
        {listaProdutos.map((item, index) => (
          <Card_Products
            key={index}
            ProductTitle={item.ProductTitle}
            ProductImg={item.ProductImg}
            ProductDescript={item.ProductDescript}
            ProductPrice={item.ProductPrice}
          />
        ))}
      </div>
    </>
  );
}

export default Produtos;
