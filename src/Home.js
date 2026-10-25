import React, { useReducer } from "react";
import { cartReducer, initialState } from "./reducer";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Headphones", price: 2000 },
  { id: 3, name: "Keyboard", price: 1500 },
];

function Home() {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div id="home" className="container">
      <h1>Welcome to Our Store</h1>

      <section id="products">
        <h2>Available Products</h2>

        <div className="products">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price.toLocaleString("en-IN")}</p>
              <button
                onClick={() =>
                  dispatch({ type: "ADD", payload: product })
                }
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="cart">
        <h2>Shopping Cart</h2>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price.toLocaleString("en-IN")}</p>
              </div>

              <div className="cart-controls">
                <button
                  onClick={() =>
                    dispatch({ type: "DECREASE", payload: item.id })
                  }
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    dispatch({ type: "INCREASE", payload: item.id })
                  }
                >
                  +
                </button>

                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE", payload: item.id })
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}

        <div className="summary">
          <h3>Total Items: {totalItems}</h3>
          <h3>
            Total Price: ₹{totalPrice.toLocaleString("en-IN")}
          </h3>
        </div>
      </section>
    </div>
  );
}

export default Home;
