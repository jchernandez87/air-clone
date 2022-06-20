import '../styles/Nav.css';
import logo from '../images/logo.png';

function Nav() {
  return (
    <nav className="nav">
      <img className="logo" src={logo} alt="logo" />
    </nav>
  );
}

export default Nav;
