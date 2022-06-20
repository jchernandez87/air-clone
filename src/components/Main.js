import Nav from './Nav';
import Header from './Header';
import Card from './Card';
import '../styles/Main.css';

function Main() {
  return (
    <main className='main'>
      <Nav />
      <Header />
      <div className='card-slide'>
        <Card />
      </div>
    </main>
  );
}

export default Main;
