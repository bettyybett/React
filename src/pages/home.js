import React from "react"
import { useHistory } from "react-router-dom";
import './home.css';

const Home = () =>  {
  // const history = useHistory();
  // const gotoLogin = () =>
  return (
    <div>
     <h4 className = "text-center">INITIERE DE INOT</h4>
     <br></br>
     <br></br>
      <p id="inot1" className = "text-center font-familiy:Avantgarde">Inotul este un sport induvidual,dar si un sport de echipa care necesita miscarea intregului corp in apa. Acest sport se practica in bazine,dar si in mare. Inotul competitiv este unul dintre cele mai populare sporturi Olimpice. Sportul acesta variaza cand vine vorba de distanta inotata,cat si de felul de inot, fluture,spate, bras,crawl sau chiar mixt</p>
      
      <p id="inot2" className = "text-center">Inotul este propulsia induviduala a unei persoane in apa, fie pt recreere,sport,exercitiu sau supravietuire. Miscare se realizeaza prin coordonarea membrelor si a corpului. Oamenii pot invata metodele respiratiei sub apa sau miscarea obisuita de inot, chiar dupa cateva saptamani de la nastere ca un raspuns de supravietuire</p>

    </div>
  );
}

export default Home;
