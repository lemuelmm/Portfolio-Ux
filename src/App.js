import React from 'react';
import './index.css';

import homeWeb from './img/Home.png';
import loginMobile from './img/Login.jpg';

function App() {
  return (
    <div className="App">
      <div className="tittle">
        <h1>Lemuel Monteiro</h1>
        <p>Eu sou Ui/Ux Designer, de Juazeiro do norte, apaixonado por criar e comunicar por meio de interfaces bonitas e fáceis de usar.</p>
      </div>
      <h3>Projetos:</h3>
      <h2>Geoparque Araripe</h2>
      <div className="main-imgs">
        <img id="imgWeb" src={homeWeb} alt=""/>
        <img id="imgMobile" src={loginMobile} alt=""/>
      </div>
      <h3>O Problema:</h3>
      <p>A necessidade de acompanhar mais de perto o estado dos gesítios do geoparque araripe é cada vez maior, mas esse processo é demorado pois tanto o levantamento dos dados in-loco como o processamento é analógico, por conta disso o intuito desse projeto e facilitar a coleta de dados por meio de um app mobile, e o processamento e mostragem de informações pela plataforma Web.</p>
      <h3>Processo de criação:</h3>
      <p>Como o objetivo principal é facilitar a coleta de dados, naturalmente o levantamento das necessidades e ambiênte em que o pesquisador faria a coleta era o principal, e a partir daí foram desenvolvidas as Ui do aplicativo mobile.</p>   
      <h3>Telas Geopark Mobile:</h3>
      
    
    
    
    </div>
  );
}

export default App;
