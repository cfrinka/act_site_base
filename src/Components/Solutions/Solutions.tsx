import software_testing from "../../assets/software-test.png";
import analysis from "../../assets/analysis.png";
import computer from "../../assets/computer.png";
import apps from "../../assets/apps.jpg";
import dashboard from "../../assets/dashboard.jpg";
import financial from "../../assets/financial.jpg";
import "./Solutions.css";

const Solutions = () => {
  const solutionsData = [
    {
      image: apps,
      icon: software_testing,
      text: "Desenvolvimento de Software Personalizado",
    },
    {
      image: dashboard,
      icon: analysis,
      text: "Implementação de Sistemas de Business Intelligence",
    },
    {
      image: financial,
      icon: computer,
      text: "Serviços de Cloud Computing",
    },
  ];
  <a
    href="https://www.flaticon.com/free-icons/software-testing"
    title="software testing icons"
  >
    Software testing icons created by Freepik - Flaticon
  </a>;
  return (
    <div className="programs" id="programs">
      {solutionsData.map((solution, index) => (
        <div className="program" key={index}>
          <img src={solution.image} alt="" />
          <div className="caption">
            <img src={solution.icon} alt="" />
            <p>{solution.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Solutions;
