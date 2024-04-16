const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <a href="/shopping-cart-react" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/shopping-cart-react/list/all"
              className="nav-link px-2 text-muted"
            >
              List
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">
          © 2024 Nicele Anne Reyes, All Rights Reserved
        </p>
      </footer>
    </div>
  );
};

export default Footer;
