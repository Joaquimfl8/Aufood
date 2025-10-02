import styles from './Cards_Products.Module.css';


function Card_Products({ ProductTitle, ProductImg, ProductDescript, ProductPrice }) { 
    return ( <div className="card"> <img src={ProductImg} alt={ProductTitle} className="card-img" /> 
    <div className="card-info"> 
        <h2 className="card-title">{ProductTitle}</h2> 
        <p className="card-description">{ProductDescript}</p> 
        <p className="card-price">R$ {ProductPrice}</p> 
        <button className="card-button">Adicionar ao Carrinho</button> 
        </div> 
        </div> 
        ); 
    } 
    
export default Card_Products;


