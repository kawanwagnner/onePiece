import goingMerry from "./img/Going_Merry.jpg";
import crewRuivo from "./img/ruivo.png";
import crewMobbydik from "./img/moby.png";

import "./css/Crews.css";

export default function CardsCrews() {
  return (
    <div className="container">
      <div className="card-crew">
        <img
          className="goingMerry"
          src={goingMerry}
          alt="Image of The Straw Hat"
        />
        <p className="name-crew">The Straw Hat</p>
      </div>

      <div className="card-crew">
        <img className="moby" src={crewMobbydik} alt="Image of The Straw Hat" />
        <p className="name-crew">The Straw Hat</p>
      </div>

      <div className="card-crew">
        <img className="ruivo" src={crewRuivo} alt="Image of The Straw Hat" />
        <p className="name-crew">The Straw Hat</p>
      </div>
    </div>
  );
}
