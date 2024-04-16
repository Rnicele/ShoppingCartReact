import { useLocation } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { FormatCurrency } from "./FormatCurrency";

const ItemList = ({ item }: any) => {
  const location = useLocation();
  const url = location.pathname;
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(item.id);
  return (
    <div className="card">
      <img
        src={"../../public/" + item.ImageLink}
        className="card-img-top"
        alt={item.ItemName}
      />
      <div className="card-body">
        <p className="card-title">{item.ItemName}</p>
        {url.includes("/list") ? (
          <div
            className="row"
            style={{
              width: "100%",
              margin: "auto",
              justifyContent: "center",
            }}
          >
            <h5 className="card-title">{FormatCurrency(item.Price)}</h5>
            <div className="col-auto">
              {quantity === 0 ? (
                <button
                  className="btn btn-primary col-auto add-cart"
                  onClick={() => increaseCartQuantity(item.id)}
                >
                  Add to Cart
                </button>
              ) : (
                <div
                  className="d-flex align-items-center flex-column"
                  style={{ gap: ".5rem" }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ gap: ".5rem" }}
                  >
                    <button
                      className="btn btn-primary"
                      onClick={() => decreaseCartQuantity(item.id)}
                    >
                      -
                    </button>
                    <div>
                      <span className="fs-3">{quantity}</span>
                      <span className="in-cart-text"> in cart</span>
                    </div>
                    <button
                      className="btn btn-primary"
                      onClick={() => increaseCartQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ItemList;
