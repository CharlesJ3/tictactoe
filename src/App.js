import './App.css';
import React, { useState } from 'react';
import Footer from './components/Footer/Footer';
import GameArea from './components/GameArea/GameArea';
import Header from './components/Header/Header';

function App() {

  const [board, upPieces] = useState([
    {
      piece1: 0,
      piece2: 0,
      piece3: 0,
      piece4: 0,
      piece5: 0,
      piece6: 0,
      piece7: 0,
      piece8: 0,
      piece9: 0,
    }
  ])

  const [player, checkPlayer] = useState(
    {
      currentPlayer: 'x',
    }
  )

  const checkMove = ( selected ) => {
    if (checkPlayer.currentPlayer === 'x') {
      console.log(selected)
    }

    if (player.currentPlayer === 'y') {
      console.log(selected)
    }

    console.log(player.currentPlayer);
  }

  return (
    <div className="app">
        <Header />
        <GameArea checkMove={checkMove}/>
        <Footer />
    </div>
  );
}

export default App;
