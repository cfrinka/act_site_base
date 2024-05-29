import "./Team.css";
import neto from "../../assets/neto.jpg";
import guto from "../../assets/guto.jpg";
import tulio from "../../assets/tulio.jpg";

import FlipCard from "../FlipCard/FlipCard";

const Team = () => {
  return (
    <div id="Team" className="campus">
      <div className="gallery">
        <FlipCard
          photo={guto}
          name="Augusto"
          role="CEO"
          description="Voluptate irure culpa adipisicing officia qui pariatur aliquip."
        />
        <FlipCard
          photo={neto}
          name="Carlos"
          role="COO"
          description="Voluptate irure culpa adipisicing officia qui pariatur aliquip."
        />
        <FlipCard
          photo={tulio}
          name="Tulio"
          role="CTO"
          description="Voluptate irure culpa adipisicing officia qui pariatur aliquip."
        />
      </div>
    </div>
  );
};

export default Team;
