import React from 'react';
import './index.css';
import Popup from "reactjs-popup";

import homeWeb from './img/Home.png';
import loginMobile from './img/Login.jpg';
import solicitacoes from './img/Solicitações.jpg';
import local from './img/Local.jpg';
import impacto from './img/Impacto.jpg';
import perfil from './img/Solicitações-2.jpg';
import enviado from './img/Solicitações-1.jpg';
import avalExpand from './img/Avaliação-1.jpg';


//web Imgs
import pesqusiadores from './img/webImg/Pesquisadores-1.jpg';
import solicitacoesWeb from './img/webImg/Solicitações-1.jpg';
import geositioMain from './img/webImg/Relatório Geosítio.jpg';
import geositio1 from './img/webImg/Relatório Geosítio-1.jpg';
import geopark from './img/webImg/Relatório Geopark.jpg';
import geopark1 from './img/webImg/Relatório Geopark-1.jpg';

//Evo Corp Site
import home from './img/evoImg/Home.jpg';
import sevices from './img/evoImg/Home-1.jpg';
import locals from './img/evoImg/Home-3.jpg';
import about from './img/evoImg/Home-5.jpg';
import msg1 from './img/evoImg/Home-2.jpg';
import msg2 from './img/evoImg/Home-4.jpg';


function App() {
  return (
    <div className="App">
      <div className="tittle">
        <h1>Lemuel Monteiro</h1>
        <p>Eu sou Ui/Ux Designer, de Juazeiro do norte, apaixonado por criar e comunicar por meio de interfaces bonitas e fáceis de usar.</p>
      </div>
      <h3>Projetos:</h3>
      <p>Conheça alguns projetos que fiz, ou estão em desenvolvimento.</p>
      <h2>Geoparque Araripe</h2>
      <div className="main-imgs">
        <img id="imgWeb" src={homeWeb} alt=""/>
        <img className="mainImg" id="imgMobile" src={loginMobile} alt=""/>
      </div>
      <h3>O Problema:</h3>
      <p>A necessidade de acompanhar mais de perto o estado dos gesítios do geoparque araripe é cada vez maior, porém esse processo é demorado, pois, tanto o levantamento dos dados é feito presencialmente, como o processamento também é analógico, por conta disso, o intuito desse projeto é facilitar a coleta, processamento e acesso ás informações do Geopark.</p>
      <h3>Processo de criação:</h3>
      <p>Como o objetivo principal é facilitar a coleta de dados, naturalmente o levantamento das necessidades e peculiaridades do uso do aplicativo foram levadas em conta, como o ambiênte em que o pesquisador fará a coleta,  sendo assim, foi desenvolvida uma interface que favorecesse o uso em locais com muita luminosidade, como é o campo de pesquisa.</p>   
      <div>

        <h3>Telas Geopark Mobile:</h3>
        <div id="flex">
          <img id="imgMobile" src={loginMobile} alt=""/>
          <img id="imgMobile" src={solicitacoes} alt=""/>
          <img id="imgMobile" src={perfil} alt=""/>
          <p className="mainMobile">A necessidade de acompanhar mais de perto o estado dos gesítios do geoparque araripe só aumenta, mas esse processo é demorado pois tanto o levantamento dos dados in-loco como o processamento é analógico, por conta disso o intuito desse projeto e facilitar a coleta de dados por meio de um app mobile, e o processamento e mostragem de informações pela plataforma Web.</p>
        </div>
        <div id="flex">
          <div className="secondColumn">
            <img id="imgMobile" src={local} alt=""/>
            <img id="imgMobile" src={avalExpand} alt=""/>
            <img id="imgMobile" src={impacto} alt=""/>
            <img id="imgMobile" src={enviado} alt=""/>
          </div>
        </div>
        <div>
          
        </div>


      </div>
      <div>
        <h3>Telas Geopark Web:</h3>
          <div id="flex">
            <img id="webMainContent" src={homeWeb} alt=""/>
            <p className="mainMobile">A aplicação Web tem como usuário o administrador e será onde os relatórios dos geosítios e geoparques serão apresentados. Além do gerenciamento dos pesquisadores cadastrados, geosítios e solicitações de relatórios de geosítios que deverão ser feitos.</p>
          </div>
        <div>
          <div className="webPopup">
            <Popup trigger={<img id="webContent" src={pesqusiadores} alt=""/>} modal closeOnDocumentClick position="left center">
              <div className="containerImg">
                <img className="imgWebExpand" src={pesqusiadores} alt=""/>
              </div>
            </Popup>
            <Popup trigger={<img id="webContent" src={solicitacoesWeb} alt=""/>} modal closeOnDocumentClick position="left center">
              <div className="containerImg">
                <img className="imgWebExpand" src={solicitacoesWeb} alt=""/>
              </div>
            </Popup>
          </div>

          <div className="webPopup">
            <Popup trigger={<img id="webContent" src={geositioMain} alt=""/>} modal closeOnDocumentClick position="left center">
              <div className="containerImg">
                <img className="imgWebExpand" src={geositioMain} alt=""/>
              </div>
            </Popup>
            <Popup trigger={<img id="webContent" src={geositio1} alt=""/>} modal closeOnDocumentClick position="left center">
              <div className="containerImg">
                <img className="imgWebExpand" src={geositio1} alt=""/>
              </div>
            </Popup>
          </div>

          <div className="webPopup">
            <Popup trigger={<img id="webContent" src={geopark} alt=""/>} modal closeOnDocumentClick position="left center">
              <div className="containerImg">
                <img className="imgWebExpand" src={geopark} alt=""/>
              </div>
            </Popup>
            <Popup trigger={<img id="webContent" src={geopark1} alt=""/>} modal closeOnDocumentClick position="left center">
              <div className="containerImg">
                <img className="imgWebExpand" src={geopark1} alt=""/>
              </div>
            </Popup>
          </div>
        </div>


      </div>

      <h2>Site Institucional</h2>
      <div>
        <div className="webPopup">
          <Popup trigger={<img id="webContent" src={home} alt=""/>} modal closeOnDocumentClick position="left center">
            <div className="containerImg">
              <img className="imgWebExpand" src={home} alt=""/>
            </div>
          </Popup>
          <Popup trigger={<img id="webContent" src={sevices} alt=""/>} modal closeOnDocumentClick position="left center">
            <div className="containerImg">
              <img className="imgWebExpand" src={sevices} alt=""/>
            </div>
          </Popup>
        </div>

        <div className="webPopup">
          <Popup trigger={<img id="webContent" src={locals} alt=""/>} modal closeOnDocumentClick position="left center">
            <div className="containerImg">
              <img className="imgWebExpand" src={locals} alt=""/>
            </div>
          </Popup>
          <Popup trigger={<img id="webContent" src={about} alt=""/>} modal closeOnDocumentClick position="left center">
            <div className="containerImg">
              <img className="imgWebExpand" src={about} alt=""/>
            </div>
          </Popup>
        </div>

        <div className="webPopup">
          <Popup trigger={<img id="webContent" src={msg1} alt=""/>} modal closeOnDocumentClick position="left center">
            <div className="containerImg">
              <img className="imgWebExpand" src={msg1} alt=""/>
            </div>
          </Popup>
          <Popup trigger={<img id="webContent" src={msg2} alt=""/>} modal closeOnDocumentClick position="left center">
            <div className="containerImg">
              <img className="imgWebExpand" src={msg2} alt=""/>
            </div>
          </Popup>
        </div>
          <p className="adendo">* este site não está no ar, foi criado único e exclusivamente para demonstrar minhas capacidades para a recriação de um site real.</p>
        <p> </p>      
    <p >Para o projeto do Geopark Araripe foi usado a plataforma de prototipação Figma, para criar o site institucional foi usado o Adobe Xd.</p>
       


      </div>
    
    </div>
  );
}

export default App;
