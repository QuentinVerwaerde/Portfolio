import { NavLink } from "react-router-dom";
import geocatLogo from "../../assets/geocatlogo.jpg";
import "../cardproject.css";

function CardGeoCat() {
  return (
    <div className="cardproject">
      <img className="imgcardproject" src={geocatLogo} alt="" />
      <text className="description">
        Geo Cat est un site unique qui a pour but de vous faire retrouver mon
        chat dans une carte de Paris. Le projet allie la technologie React
        Leaflet et une API publique de la Mairie de Paris pour fonctionnet et a
        été mon second projet de développement à la Wild Code School. Il
        s&apos;agit d&apos;un projet majoritairement développé seul.
      </text>
      <NavLink className="btn" to="https://geo-cat.vercel.app">
        Geo Cat
      </NavLink>
    </div>
  );
}

export default CardGeoCat;
