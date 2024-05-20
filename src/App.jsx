import React from 'react';
import './App.css';
import account from './icons/account.png';
import wallet from './icons/wallet.png'
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
    <div>
      <header className="cabecalho">
        <div className="container">
          <div className="barra-superior"></div>
          <div className="barra-superior"></div>
          <div className="barra-superior"></div>
        </div>
        <img src={account} id='avatar' alt='avatar' />
      </header>
      <main>
        <div id='wallet'>
          <img src={wallet} className='carteira'></img>
          <h1 id='pts'>{pontos} pts</h1>
        </div>
      </main>
    </div>
  );
};

export default Home;
