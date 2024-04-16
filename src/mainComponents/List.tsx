import { useLocation } from "react-router-dom";

import items from "../assets/json/Items.json";
import ItemList from "../components/ItemList";
import Sort from "../components/Sort";

const List = () => {
  const location = useLocation();
  const url = location.pathname;
  const segment = url.substring(url.lastIndexOf("/") + 1);
  const filterItems = items.filter((item) => segment.includes(item.category));
  const saleItems = items.filter((item) => "yes".includes(item.Sale));
  return (
    <div className="row g-4 list-container mx-auto">
      <Sort />
      {segment === "all"
        ? items.map((item) => (
            <div
              className="col-xl-3 col-lg-4 col-md-3 col-sm-3 card-group"
              key={item.id}
            >
              <ItemList item={item} />
            </div>
          ))
        : segment === "sale"
        ? saleItems.map((item) => (
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6 card-group"
              key={item.id}
            >
              <ItemList item={item} />
            </div>
          ))
        : filterItems.map((item) => (
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6 card-group"
              key={item.id}
            >
              <ItemList item={item} />
            </div>
          ))}
    </div>
  );
};

export default List;
