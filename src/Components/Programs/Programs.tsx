import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";
import "./Programs.css";

const Programs = () => {
  const programsData = [
    {
      image: program_1,
      icon: program_icon_1,
      text: "Graduation Degree",
    },
    {
      image: program_2,
      icon: program_icon_2,
      text: "Master's Degree",
    },
    {
      image: program_3,
      icon: program_icon_3,
      text: "PhD Degree",
    },
  ];

  return (
    <div className="programs" id="programs">
      {programsData.map((program, index) => (
        <div className="program" key={index}>
          <img src={program.image} alt="" />
          <div className="caption">
            <img src={program.icon} alt="" />
            <p>{program.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Programs;
