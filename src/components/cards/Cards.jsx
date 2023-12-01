import CardDragonQuest from "../carddragonquest/CardDragonQuest";
import CardMaestroTask from "../cardmaestrotask/CardMaestroTask";
import CardGeoCat from "../cardgeocat/CardGeoCat";
import "./card.css";

function Cards() {
  return (
    <div className="cardsproject">
      <CardDragonQuest />
      <CardMaestroTask />
      <CardGeoCat />
    </div>
  );
}

export default Cards;
