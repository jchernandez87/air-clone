import "../styles/Card.css";

function Card(props) {
  return (
    <div className="card">
      <img className="card-img" src={`img/${props.img}`} alt="card-img" />
      <div className="card-info">
        <div className="rating-info">
          <img className="star-icon" src="img/star.png" alt="star" />
          <span className="rating-number">{props.rating}</span>
          <span className="country-text">
            ({props.reviewCount}) {props.country}
          </span>
        </div>
        <span className="service-name">{props.title}</span>
        <div>
          <span className="price">From ${props.price}</span>
          <span className="person"> / person</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
