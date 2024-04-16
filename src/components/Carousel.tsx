import delivery from "/assets/header/delivery.png";
import menu from "/assets/header/menu.png";
import promo from "/assets/header/Promo.png";

const Carousel = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={promo} className="d-block w-100" alt="Grocery Promo" />
        </div>
        <div className="carousel-item">
          <img src={delivery} className="d-block w-100" alt="Delivery now" />
        </div>
        <div className="carousel-item">
          <img src={menu} className="d-block w-100" alt="Delicious Menu" />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
