import { useRef } from "react";

import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import "./Testimonials.css";

const Testimonials = () => {
  const users = [
    {
      id: "user_1",
      img: user_1,
      name: "Alice Johnson",
      city: "New York, USA",
      text: "Dolor elit eu cupidatat consectetur anim occaecat velit cillum ullamco culpa tempor adipisicing adipisicing mollit. Adipisicing aliquip ea ea occaecat ipsum est quis esse. Incididunt ad consequat labore nisi sit ea sit do velit officia tempor sit deserunt pariatur. Amet eu cupidatat ad ipsum ut eu deserunt dolor est. Lorem sunt eiusmod duis magna nostrud.",
    },
    {
      id: "user_2",
      img: user_2,
      name: "Bob Smith",
      city: "Tokyo, Japan",
      text: "Labore est dolore id consequat et occaecat dolore do excepteur incididunt minim. Cillum sit est elit fugiat commodo ut cillum veniam eu do nisi duis sunt. Reprehenderit ut duis est cupidatat sunt nostrud culpa eiusmod anim est consequat sint aliqua.",
    },
    {
      id: "user_3",
      img: user_3,
      name: "Charlie Brown",
      city: "Paris, France",
      text: "Aliqua pariatur elit magna non amet laborum aliquip sint sint sunt cillum cupidatat ex. Anim elit sint dolore ea duis voluptate voluptate magna. Sit aute nostrud eiusmod laboris duis esse irure in cillum sit occaecat cillum consectetur magna. Eiusmod incididunt ut Lorem anim quis quis non nostrud voluptate excepteur eu. Consectetur est enim cillum nisi aliquip.",
    },
    {
      id: "user_4",
      img: user_4,
      name: "Diana Prince",
      city: "Sydney, Australia",
      text: "Nulla veniam amet ullamco magna duis duis. Aliquip id Lorem fugiat est culpa velit aliquip nostrud amet sunt voluptate dolore sint in. Ad fugiat quis occaecat veniam magna consectetur qui. Officia Lorem est nisi cillum veniam proident mollit duis ex mollit. Nostrud nostrud sunt est nisi ad culpa veniam culpa. In commodo ullamco sunt reprehenderit ullamco. Sit dolore Lorem et sint officia ex nulla Lorem tempor proident..",
    },
  ];

  const slider = useRef<HTMLUListElement>(null);
  let translateX = 0;

  const slideForward = () => {
    if (translateX > -50) {
      translateX -= 25;
    }

    if (slider.current) {
      slider.current.style.transform = `translateX(${translateX}%)`;
    }
  };

  const slideBackward = () => {
    if (translateX < 0) {
      translateX += 25;
    }

    if (slider.current) {
      slider.current.style.transform = `translateX(${translateX}%)`;
    }
  };

  return (
    <div id="testimonials" className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          {users.map((user) => (
            <li key={user.id}>
              <div className="slide">
                <div className="user-info">
                  <img src={user.img} alt="" />
                  <div>
                    <h3>{user.name}</h3>
                    <span>{user.city}</span>
                  </div>
                </div>
                <p>{user.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
