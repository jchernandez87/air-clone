import '../styles/Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-grid">
        <div className='one' >
          <img src="img/28.png" alt="28"></img>
        </div>
        <div className='two'>
          <img src="img/30.png" alt="30"></img>
          <img src="img/26.png" alt="26"></img>
        </div>
        <div className='three'>
          <img src="img/27.png" alt="27"></img>
          <img src="img/29.png" alt="29"></img>
        </div>
        <div className='four'>
          <img src="img/22.png" alt="22"></img>
          <img src="img/23.png" alt="23"></img>
        </div>
        <div className='five'>
          <img src="img/25.png" alt="25"></img>
          <img src="img/24.png" alt="24"></img>
        </div>
      </div>
      <div className='header-text'>
        <h1 className='header-title'>Online Experiences</h1>
        <p className='header-info'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </div>
  );
}

export default Header;
