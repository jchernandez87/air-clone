import "../styles/Card.css";

function Card(props) {
  let badgeText;

  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img className="card-img" src={`img/${props.item.img}`} alt="card-img" />
      <div className="card-info">
        <div className="rating-info">
          <img className="star-icon" src="img/star.png" alt="star" />
          <span className="rating-number">{props.item.stats.rating}</span>
          <span className="country-text">
            ({props.item.stats.reviewCount}) {props.item.location}
          </span>
        </div>
        <span className="service-name">{props.item.title}</span>
        <div>
          <span className="price">From ${props.item.price}</span>
          <span className="person"> / person</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
