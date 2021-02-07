import React from 'react'
import PropTypes from 'prop-types'
import Score from '../Score/Score'
import Board from '../Board/Board'

const GameArea = ({checkMove, updatePieceVisual, board, currentPlayer}) => {
  return (
    <div className="gameArea">
      <Board
        checkMove={checkMove}
        updatePieceVisual={updatePieceVisual}
        board={board}
        currentPlayer={currentPlayer}
      />
      <Score />
    </div>
  )
}

GameArea.propTypes = {

}

export default GameArea
