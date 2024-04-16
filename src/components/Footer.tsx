import { Link, useLocation, Route, Routes } from "react-router-dom";
const Footer = () => {
  const location = useLocation();
  const path = [
    { title: "Home", link: "/" },
    { title: "List", link: "/list/all" },
  ];
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          {path.map((nav, key) => (
            <li className="nav-item" key={key}>
              <Link
                to={nav.link}
                className={
                  location.pathname === nav.link
                    ? "nav-link px-2 text-muted active"
                    : "nav-link px-2 text-muted"
                }
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-center text-muted">
          © 2024 Nicele Anne Reyes, All Rights Reserved
        </p>
      </footer>
      <Routes>
        <Route path="/" />
        <Route path="/list/:id" />
      </Routes>
    </div>
  );
};

export default Footer;
