import React from 'react';


import './styles.css'

import logo from '../../assets/logo.svg'

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta" />
        </header>
        <main>
          <h1>Seu marcketplace de coleta de resisuos.</h1>
          <p>ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>

          <a href="/cadastro">
            <span>
              >
            </span>
          </a>
          <strong>Cadastre um ponto de coleta</strong>
        </main>
      </div>
    </div>
  )
}

export default Home;