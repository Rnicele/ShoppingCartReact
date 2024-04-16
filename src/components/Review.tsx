// json
import reviews from "../assets/json/review.json";

const Review = () => {
  return (
    <div className="reviews">
      <h2 className="subtitle">What people say</h2>
      <div className="row review-list">
        {reviews.map((review, key) => (
          <div
            className="card-group col-xl-4 col-lg-4 col-md-4 col-sm-6"
            key={key}
            style={{
              marginBottom: "20px",
            }}
          >
            <div className="card ">
              <div className="card-body">
                <h5 className="card-title">{review.name}</h5>
                <p>{review.stars} Stars</p>
                <p className="card-text">{review.message}</p>
                <p className="card-text">
                  <small className="text-body-secondary">{review.date}</small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
