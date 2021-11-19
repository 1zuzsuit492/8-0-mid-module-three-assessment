import productData from "../data/productData";
import formatPrice from "../helpers/formatPrice";

const Products = (props) => {
  productData.forEach((item) => {
    item.push(
      <div className="product">
        <h2>{item.name}</h2>
        <p>Price: {formatPrice(item.price)}</p>
        <button type="submit" onClick={props.addToCart} name={item.name}
          value={item.price}>Add To Cart</button><p/>
        <img src={item.img} />
        <p>{item.description}</p>
      </div>
    );
  });
  return <div className="products">{item}</div>;
};

export default Products;
