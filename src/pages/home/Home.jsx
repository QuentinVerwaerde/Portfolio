import Cards from "../../components/cards/Cards";
import Presentation from "../../components/presentation/Presentation";
import Footer from "../../components/footer/Footer";
import "./home.css";

function Home() {
  return (
    <div>
      <Presentation />
      <Cards />
      <Footer />
    </div>
  );
}

export default Home;
