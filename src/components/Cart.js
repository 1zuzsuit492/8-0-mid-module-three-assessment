import formatPrice from "../helpers/formatPrice";

const Cart = (props) => {
  let products = [];
  let subtotal = 0;
  props.items.forEach((item) => {
    products.push(
      <li>
        {item.name}: {formatPrice(Number(item.price))}
      </li> //created li's to in order to pass the cypress tests
    );
    subtotal += Number(item.price); //converts item price to a number
  });

  return (
    <div className="cart">
      <h2>Cart</h2>
      <ul>{products}</ul>
      <h3>subtotal: {formatPrice(subtotal)}</h3>
      <h3>Tax: {formatPrice(subtotal * 0.05)}</h3>
      <h3>Total: {formatPrice(subtotal * 1.05)}</h3>
    </div>
  );
};
//data that comes from format

export default Cart;