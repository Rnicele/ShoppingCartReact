import { useShoppingCart } from "../context/ShoppingCartContext";
import items from "../assets/json/Items.json";
import { FormatCurrency } from "./FormatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = items.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <div className="hstack gap-2 d-flex align-items-center">
      <img
        src={"../../public/" + item.ImageLink}
        className="card-img-top"
        style={{ width: "100px", height: "75px", objectFit: "cover" }}
        alt={item.ItemName}
      />
      <div className="me-auto">
        <div
          style={{
            textOverflow: "ellipsis",
            overflow: "hidden",
            textWrap: "wrap",
            width: "160px",
          }}
        >
          {item.ItemName}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {" "}
          {FormatCurrency(item.Price)}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".75rem" }}>
              x {quantity}
            </span>
          )}
        </div>
      </div>
      <div>{FormatCurrency(item.Price * quantity)}</div>
      <button
        className="btn btn-outline-danger btn-sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </button>
    </div>
  );
};

export default CartItem;
