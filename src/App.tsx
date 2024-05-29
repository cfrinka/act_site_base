import { useState } from "react";
import About from "./Components/About/About";
import Team from "./Components/Team/Team";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Solutions from "./Components/Solutions/Solutions";
import Title from "./Components/Title/Title";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";

const App = () => {
  const [playerState, setPlayerState] = useState<boolean>(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Como podemos ajudar" title="Soluções" />
        <Solutions />
        <Title subtitle="Nossa história" title="QUEM SOMOS" />
        <About setPlayerState={setPlayerState} />
        <Title subtitle="Conheça nossos talentos" title="Equipe" />
        <Team />
        <Title subtitle="Encontre sua solução" title="Fale Conosco" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playerState={playerState} setPlayerState={setPlayerState} />
    </div>
  );
};

export default App;
