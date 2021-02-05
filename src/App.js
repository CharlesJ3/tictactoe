import './App.css';
import React, { useState, useEffect } from 'react';
import Footer from './components/Footer/Footer';
import GameArea from './components/GameArea/GameArea';
import Header from './components/Header/Header';

function App() {

  const [board, upPieces] = useState(
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
  )

  const [player, checkPlayer] = useState(
    {
      currentPlayer: 'x',
    }
  )

  const checkMove = ( pieceUpdate, classToUpdate ) => {

    switch(pieceUpdate) {
      case 0:
        if(board.piece1 === 0) { 

          //Update board piece to match current player
          upPieces((prevState => ({
            ...prevState,
            piece1: player.currentPlayer
          })));
          
          //Update visual before changing player
          updatePieceVisual(classToUpdate);

          //Change player successful
          updatePlayer();

          //Check for win condition
          winCondition();
        } else {

          //Let user know
          console.log(`This is already occupied by Player ${board.piece1}`);
        }
        break;
      case 1:
        if(board.piece2 === 0) { 
          upPieces((prevState => ({
            ...prevState,
            piece2: player.currentPlayer
          })));
          updatePieceVisual(classToUpdate);
          updatePlayer();
        } else {
          console.log(`This is already occupied by Player ${board.piece1}`);
        }
        break;
      case 2:
        if(board.piece3 === 0) { 
          upPieces((prevState => ({
            ...prevState,
            piece3: player.currentPlayer
          })));
          updatePieceVisual(classToUpdate);
          updatePlayer();
        } else {
          console.log(`This is already occupied by Player ${board.piece1}`);
        }
        break;
      case 3:
        if(board.piece4 === 0) { 
          upPieces((prevState => ({
            ...prevState,
            piece4: player.currentPlayer
          })));
          updatePieceVisual(classToUpdate);
          updatePlayer();
        } else {
          console.log(`This is already occupied by Player ${board.piece1}`);
        }
        break;
      case 4:
        if(board.piece5 === 0) { 
          upPieces((prevState => ({
            ...prevState,
            piece5: player.currentPlayer
          })));
          updatePieceVisual(classToUpdate);
          updatePlayer();
        } else {
          console.log(`This is already occupied by Player ${board.piece1}`);
        }
        break;
      case 5:
        if(board.piece6 === 0) { 
          upPieces((prevState => ({
            ...prevState,
            piece6: player.currentPlayer
          })));
          updatePieceVisual(classToUpdate);
          updatePlayer();
        } else {
          console.log(`This is already occupied by Player ${board.piece1}`);
        }
        break;
      case 6:
        if(board.piece7 === 0) { 
          upPieces((prevState => ({
            ...prevState,
            piece7: player.currentPlayer
          })));
          updatePieceVisual(classToUpdate);
          updatePlayer();
        } else {
          console.log(`This is already occupied by Player ${board.piece1}`);
        }
        break;
      case 7:
        if(board.piece8 === 0) { 
          upPieces((prevState => ({
            ...prevState,
            piece8: player.currentPlayer
          })));
          updatePieceVisual(classToUpdate);
          updatePlayer();
        } else {
          console.log(`This is already occupied by Player ${board.piece1}`);
        }
        break;
      case 8:
        if(board.piece9 === 0) { 
          upPieces((prevState => ({
            ...prevState,
            piece9: player.currentPlayer
          })));
          updatePieceVisual(classToUpdate);
          updatePlayer();
        } else {
          console.log(`This is already occupied by Player ${board.piece1}`);
        }
        break;
      default:
        console.log('nothing');
    }
  }

  useEffect(() => {
    winCondition();
  }, [board, player])

  const updatePlayer = () => {

    player.currentPlayer === 'x' ?
      checkPlayer({currentPlayer : 'o'}) :
      checkPlayer({currentPlayer : 'x'});
  }

  const updatePieceVisual = (classToUpdate) => {

    //Grab the class of the cell we are updating to visual the piece for users
    document.querySelector(`.${classToUpdate}`).innerHTML = player.currentPlayer;
  }

  const winCondition = () => {
    //1,2,3
    if (board.piece1 === board.piece2 && board.piece2 === board.piece3 && board.piece1 !== 0)  {
      console.log(`${player.currentPlayer} wins!`);
    } 
    
    //4,5,6
    else if (board.piece4 === board.piece5 && board.piece5 === board.piece6 && board.piece4 !== 0)  {
      console.log(`${player.currentPlayer} wins!`);
    } 

    //7,8,9
    else if (board.piece7 === board.piece8 && board.piece8 === board.piece9 && board.piece7 !== 0)  {
      console.log(`${player.currentPlayer} wins!`);
    } 

    //1, 4, 7
    else if (board.piece1 === board.piece4 && board.piece4 === board.piece7 && board.piece1 !== 0)  {
      console.log(`${player.currentPlayer} wins!`);
    } 

    //2, 5, 8
    else if (board.piece2 === board.piece5 && board.piece5 === board.piece8 && board.piece2 !== 0)  {
      console.log(`${player.currentPlayer} wins!`);
    } 

    //3, 6, 9
    else if (board.piece3 === board.piece6 && board.piece6 === board.piece9 && board.piece3 !== 0)  {
      console.log(`${player.currentPlayer} wins!`);
    } 

    //1, 5, 9
    else if (board.piece1 === board.piece5 && board.piece5 === board.piece9 && board.piece1 !== 0)  {
      console.log(`${player.currentPlayer} wins!`);
    }
    
    //3, 5, 7
    else if (board.piece3 === board.piece5 && board.piece5 === board.piece7 && board.piece3 !== 0)  {
      console.log(`${player.currentPlayer} wins!`);
    } 

    else {
      console.log('test');
    }
  }

  return (
    <div className="app">
      <Header />
      <GameArea 
        checkMove={checkMove} 
        updatePieceVisual={updatePieceVisual}
        board={board} 
        currentPlayer={player.currentPlayer}/>
      <Footer />
    </div>
  );
}

export default App
