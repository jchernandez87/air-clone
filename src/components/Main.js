import Nav from "./Nav";
import Header from "./Header";
import Card from "./Card";
import MyData from "../data/Data";
import "../styles/Main.css";

function Main() {
  const cardElements = MyData.map((item) => (
    <Card
      img={item.img}
      title={item.title}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      country={item.location}
      price={item.price}
    />
  ));

  return (
    <main className="main">
      <Nav />
      <Header />
      <div className="card-slide">{cardElements}</div>
    </main>
  );
}

export default Main;
