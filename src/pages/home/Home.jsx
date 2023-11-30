import CardDragonQuest from "../../components/carddragonquest/CardDragonQuest";
import CardGeoCat from "../../components/cardgeocat/CardGeoCat";
import CardMaestroTask from "../../components/cardmaestrotask/CardMaestroTask";
import "./home.css";

function Home() {
  return (
    <div className="cards">
      <CardDragonQuest />
      <CardMaestroTask />
      <CardGeoCat />
    </div>
  );
}

export default Home;
