import { NavLink } from "react-router-dom";
import dragonQuestLogo from "../../assets/dragonquestlogo.jpg";
import "../cardproject.css";

function CardDragonQuest() {
  return (
    <div className="cardproject">
      <img className="imgcardproject" src={dragonQuestLogo} alt="" />
      <text className="description">
        Dragon Quest est mon tout premier projet personnel. <br />
        Je me suis inspiré du célébre jeu de rôle pour réaliser un programme en
        Programmation Orienté Objet où l&apos;aléatoire prends une place très
        importante dans le comportement du programme.
      </text>
      <NavLink
        className="btn"
        to="https://github.com/QuentinVerwaerde/DragonQuest"
      >
        Dragon Quest
      </NavLink>
    </div>
  );
}

export default CardDragonQuest;
