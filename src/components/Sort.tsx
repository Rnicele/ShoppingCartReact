import { useNavigate } from "react-router-dom";
import categories from "../assets/json/categories.json";

const Sort = () => {
  const navigate = useNavigate();
  return (
    <div className="row subcategory d-flex flex-row justify-content-center w-100">
      <ul className="nav nav-tabs justify-content-center">
        <li className="nav-item">
          <a
            className={
              location.pathname.includes("sale")
                ? "nav-link active"
                : "nav-link"
            }
            aria-current="page"
            onClick={() => navigate("/list/sale")}
          >
            Sale!
          </a>
        </li>
        <li className="nav-item">
          <a
            className={
              location.pathname.includes("all") ? "nav-link active" : "nav-link"
            }
            aria-current="page"
            onClick={() => navigate("/list/all")}
          >
            All
          </a>
        </li>
        {categories.map((category) => (
          <li className="nav-item" key={category.id}>
            <a
              className={
                location.pathname.includes(category.id)
                  ? "nav-link active"
                  : "nav-link"
              }
              aria-current="page"
              onClick={() => navigate("/list/" + category.id)}
            >
              {category.Name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sort;
