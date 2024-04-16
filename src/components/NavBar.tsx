import { Link, useLocation, Route, Routes } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

const NavBar = () => {
  const location = useLocation();

  const path = [
    { title: "Home", link: "/home" },
    { title: "List", link: "/list/all" },
  ];
  const { cartQuantity } = useShoppingCart();
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm bg-white">
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            ShoppingCart
          </a>
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ marginRight: "10px" }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {path.map((nav, key) => (
                <li className="nav-item" key={key}>
                  <Link
                    to={nav.link}
                    className={
                      location.pathname === nav.link
                        ? "nav-link active"
                        : "nav-link"
                    }
                  >
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {cartQuantity > 0 && (
            <button
              className="btn btn-outline-primary  d-flex"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              Cart
              <div
                className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                style={{
                  color: "white",
                  width: "1.5rem",
                  height: "1.5rem",
                  marginLeft: "10px",
                }}
              >
                {cartQuantity}
              </div>
            </button>
          )}
        </div>
      </nav>

      <Routes>
        <Route path="/home" />
        <Route path="/list/:id" />
        <Route path="/cart" />
      </Routes>
    </div>
  );
};

export default NavBar;
