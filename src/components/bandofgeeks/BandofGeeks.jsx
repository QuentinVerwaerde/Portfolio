import { NavLink } from "react-router-dom";
import bandofgeekslogo from "../../assets/bandofgeekslogo.png";
import "../cardproject.css";

function BandofGeeks() {
  return (
    <div className="cardproject">
      <img className="imgcardproject" src={bandofgeekslogo} alt="" />
      <text className="description">
        Band of Geeks est un site collaboratif que nous avons créé avec
        plusieurs amis dans le but de partager sur nos différentes passions.
        <br />
        Je me suis investi sur le site en recherchant de nombreux partenariats
        toujours en place mais aussi en réalisant la charte graphique de Band of
        Geeks et en maintenant régulièrement le site à jour.
      </text>
      <NavLink className="btn" to="https://www.bandofgeeks.fr">
        Band of Geeks
      </NavLink>
    </div>
  );
}

export default BandofGeeks;
