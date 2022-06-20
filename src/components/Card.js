import '../styles/Card.css';

function Card() {
  return (
    <div className='card'>
      <img className='card-img' src='img/12.png' alt='card-img' />
      <div className='card-info'>
        <div className='rating-info'>
            <img className='star-icon' src='img/star.png' alt='star'/>
            <span className='rating-number'>5.0</span>
          <span className='country-text'>(6) • USA</span>
        </div>
        <span className='service-name'>Life lessons with Katie Zaferes</span>
        <div>
          <span className='price'>From $136 /</span>
          <span className='person'> person</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
