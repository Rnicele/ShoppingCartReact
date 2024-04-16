import { useNavigate } from "react-router-dom";
import categories from "../assets/json/categories.json";

const Category = () => {
  const navigate = useNavigate();
  return (
    <div className="row categories">
      <h1 className="subtitle">Categories</h1>
      {categories.map((category, key) => (
        <div
          className="col-xl-3 col-lg-3 col-md-3 col-sm-3 margin-20-b categories-container"
          key={key}
        >
          <button
            className="btn btn-outline-success btn-categories"
            onClick={() => navigate("/list/" + category.id)}
          >
            <img src={"../../" + category.image} width="100" />
            <h5>{category.Name}</h5>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Category;
