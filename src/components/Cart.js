import React from "react";

function Cart({ cart, dispatch }) {
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <section className="cart">
      <h2>Shopping Cart</h2>

      <p data-testid="total-items">
        Total Items: {totalItems}
      </p>

      <p data-testid="total-price">
        Total Price: ₹{totalPrice.toLocaleString("en-IN")}
      </p>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <h3>{item.name}</h3>

              <p>
                Price: ₹{item.price.toLocaleString("en-IN")}
              </p>

              <p>Quantity: {item.quantity}</p>

              <p>
                Subtotal: ₹
                {(item.price * item.quantity).toLocaleString("en-IN")}
              </p>

              <button
                aria-label={`Decrease ${item.name}`}
                onClick={() =>
                  dispatch({
                    type: "DECREASE",
                    payload: item.id
                  })
                }
              >
                -
              </button>

              <button
                aria-label={`Increase ${item.name}`}
                onClick={() =>
                  dispatch({
                    type: "INCREASE",
                    payload: item.id
                  })
                }
              >
                +
              </button>

              <button
                onClick={() =>
                  dispatch({
                    type: "REMOVE",
                    payload: item.id
                  })
                }
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Cart;
