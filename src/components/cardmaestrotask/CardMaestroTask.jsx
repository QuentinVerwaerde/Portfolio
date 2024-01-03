import { NavLink } from "react-router-dom";
import maestrotaskLogo from "../../assets/maestrotasklogo.png";
import "../cardproject.css";

function CardMaestroTask() {
  return (
    <div className="cardproject">
      <img className="imgcardproject" src={maestrotaskLogo} alt="" />
      <text className="description">
        Maestro Task a été mon premier projet de groupe au sein de la Wild Code
        School. Développé en 2 semaines dans une équipe de 4 membres, Maestro
        Task est un site proposant à son utilisateur une fonction
        &#34;post-it&#34; pour ne rien oublier.
      </text>
      <NavLink className="btn" to="https://maestro-task.vercel.app/">
        Maestro Task
      </NavLink>
    </div>
  );
}

export default CardMaestroTask;
