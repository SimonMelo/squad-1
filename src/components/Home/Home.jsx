import React from 'react';
import './HomeCss.css';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import WalletIcon from '@mui/icons-material/Wallet';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Checkbox } from '@mui/material';
import { toBeChecked } from '@testing-library/jest-dom/matchers';

const Home = () => {
  const [pontos, setPontos] = useState(0);

  const [showNav, setShowNav] = useState(false);

  const [showNav2, setShowNav2] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const toggleNav2 = () => {
    setShowNav2(!showNav2);
  };

  return (
    <div id='body'>
      <div className='cabecalho'>
      <div id='bar'>
        <input type='checkbox' id='check' onChange={toggleNav}/>
        <MenuIcon sx={{fontSize: 50}}/>
        <input type='checkbox' id='check2' onChange={toggleNav2}/>
        <div className="account"><AccountCircleSharpIcon sx={{fontSize: 50,marginRight: 3,}}/></div></div>
      </div>
      <div>
        {showNav && (
          <nav id='menu-nav'>
            <ul className='list'>
              <li><a href=''>Login</a></li>
              <li><a href=''>Minhas conquistas</a></li>
              <li><a href=''>Configurações</a></li>
              <li><a href=''>Ajuda</a></li>
            </ul>
          </nav>
        )}
        
        {showNav2 && (
          <nav id='menu-nav2'>
            <ul className='list-account'>
              <li><a href=''>Configurações</a></li>
              <li><a href=''>Sair</a></li>
            </ul>
          </nav>
        )} 
      </div>

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
    </div>
  );
};

export default Home;

