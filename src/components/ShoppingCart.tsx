import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import items from "../assets/json/Items.json";
import { FormatCurrency } from "./FormatCurrency";

const ShoppingCart = () => {
  const { cartItems, removeAllFromCart } = useShoppingCart();
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex={-1}
      id="offcanvasExample"
      aria-labelledby="offcanvasExampleLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title me-2" id="offcanvasExampleLabel">
          Cart
        </h5>
        {cartItems.length > 0 && (
          <button
            className="btn btn-outline-danger"
            style={{ fontSize: ".85rem" }}
            onClick={removeAllFromCart}
          >
            Remove All
          </button>
        )}
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className="vstack gap-3">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          {cartItems.length > 0 && (
            <div className="ms-auto fw-bold fs-t">
              Total{" "}
              {FormatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = items.find((i) => i.id === cartItem.id);
                  return total + (item?.Price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
