import ItemList from "./ItemList";
import { useNavigate } from "react-router-dom";

import items from "../assets/json/Items.json";

const Sale = () => {
  const navigate = useNavigate();
  return (
    <div className="row sale-container">
      <h2 className="subtitle margin-0-b">Sale Items</h2>
      <div className="row g-4 sale-item-list pad-20-b">
        {items
          .filter((item) => "yes".includes(item.Sale))
          .map((item) => (
            <div
              className="col-xl-2 col-lg-2 col-md-3 col-sm-3 card-group"
              key={item.id}
            >
              <ItemList item={item} />
            </div>
          ))}
      </div>
      <hr />
      <div className="btn-center">
        <button
          className="btn btn-light"
          onClick={() => navigate("/list/sale")}
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default Sale;
