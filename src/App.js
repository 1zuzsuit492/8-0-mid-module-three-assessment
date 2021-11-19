import React, {useState} from 'react';
import "./App.css";

function App(){
  const [cart, setCart] = useState([]);
  const [products] = useState([
    { 
      name: 'Baseball Glove',
      cost: '$19.99',
      image: 'https://www.iconshock.com/image/RealVista/Sports/baseball_gloves',
    },
    { 
      name: 'Vintage VCR',
      cost: '$59.99',
      image: 'https://www.iconshock.com/image/Vista/Video_production/vcr',
    },
    { 
      name: 'Rusty Bicycle',
      cost: '$55.55',
      image: 'https://www.sefiles.net/images/library/zoom/brooklyn-bicycle-co.-franklin-7-202518-17.jpg',
    },
    { 
      name: 'Mismatched Socks',
      cost: '$2.99',
      image: 'https://w7.pngwing.com/pngs/617/241/png-transparent-organic-root-stimulator-olive-oil-edge-control-hair-gel-ors-olive-oil-incredibly-rich-moisturizing-hair-lotion-ors-olive-oil-creme-olive-oil-label.png',
    },
    { 
      name: 'Old Newspapers',
      cost: '$7.50',
      image: 'https://www.vhv.rs/dpng/d/412-4127415_transparent-ps4-controller-png-ps4-dualshock-4-gold.png',
    },
    { 
      name: 'Comfy Armchair',
      cost: '$47.00',
      image: 'https://www.vhv.rs/dpng/d/412-4127415_transparent-ps4-controller-png-ps4-dualshock-4-gold.png',
    },
    
]);
//set product state,
//set cart state and cart function
//made an array and looped through it so that each product is displayed with less code,
//used object destructuring inside of div class
//every time button is clicked, item is added to cart.
//created a button that allows user to access cart & shows how many items are inside

const addToCart = (product) =>{
  setCart([...cart, product]);
}




  return (
    <div className='App'>
        <header>
          <button>Go to Cart ({cart.length})</button>
          </header>
      <h1>Garage Sale!</h1>
      <div className='products'>
      {products.map((product) => (
      <div className='product'>
        <h3>{product.name}</h3>
        <h4>{product.cost}</h4>
        <img src={product.image} alt={product.name} />
        <button onClick={()=> addToCart(product)}>Add to Cart</button>
      </div>
      ))}
      </div>
  </div>    
      )
}
export default App;
