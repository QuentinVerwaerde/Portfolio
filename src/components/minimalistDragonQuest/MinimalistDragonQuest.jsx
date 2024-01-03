import { NavLink } from "react-router-dom";
import dragonquestlogo from "../../assets/dragonquestlogo.jpg";

function MinimalistDragonQuest() {
  return (
    <div>
      <NavLink to="">
        <img src={dragonquestlogo} alt="" />
      </NavLink>
    </div>
  );
}

export default MinimalistDragonQuest;
