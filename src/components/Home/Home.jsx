import React from 'react';
import './App.css';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import WalletIcon from '@mui/icons-material/Wallet';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';

const Home = () => {
  const [pontos, setPontos] = useState(0);

  const aumentarPontos = () => {
    setPontos(pontos + 1);
  };

  const diminuirPontos = () => {
    if (pontos > 0) {
      setPontos(pontos - 1);
    }
  };

  return (
    <div id='body'>
      <header className="cabecalho">
        <div className="container">
          <div className="barra-superior"></div>
          <div className="barra-superior"></div>
          <div className="barra-superior"></div>
        </div>
        <AccountCircleSharpIcon 
        sx={{fontSize: 50,marginRight: 3,}}/>
      </header>
      <main>
        <div id='wallet'>
          <WalletIcon sx={{fontSize: 70}}></WalletIcon>
          <h1 id='pts'>{pontos} pts</h1>
        </div>
        <h4 className='titulo'>Atividades</h4>
        <Carousel>
          <div className="carrossel">
            <div className="quadrado">Quadrado 1</div>
            <div className="quadrado">Quadrado 2</div>
            <div className="quadrado">Quadrado 3</div>
            <div className="quadrado">Quadrado 4</div>
          </div>
          <div className="carrossel">
            <div className="quadrado">Quadrado 5</div>
            <div className="quadrado">Quadrado 6</div>
            <div className="quadrado">Quadrado 7</div>
            <div className="quadrado">Quadrado 8</div>
          </div>
        </Carousel>
        <h4 className='titulo'>Bonificações</h4>
        <Carousel>
          <div className="carrossel">
            <div className="quadrado">Quadrado 1</div>
            <div className="quadrado">Quadrado 2</div>
            <div className="quadrado">Quadrado 3</div>
            <div className="quadrado">Quadrado 4</div>
          </div>
          <div className="carrossel">
            <div className="quadrado">Quadrado 5</div>
            <div className="quadrado">Quadrado 6</div>
            <div className="quadrado">Quadrado 7</div>
            <div className="quadrado">Quadrado 8</div>
          </div> 
        </Carousel>
      </main>
    </div>
  );
};

export default Home;

