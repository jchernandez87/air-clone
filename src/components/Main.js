import Nav from "./Nav";
import Header from "./Header";
import Card from "./Card";
import MyData from "../data/Data";
import "../styles/Main.css";

function Main() {
  const cardElements = MyData.map((item) => (
    <Card item={item} key={item.id} />
  ));

  return (
    <main className="main">
      <Nav />
      <Header />
      <div className="card-slide">
        {cardElements}
      </div>
    </main>
  );
}

export default Main;
