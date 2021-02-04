import React from 'react'
import './Board.css'
import PropTypes from 'prop-types'

const Board = ({checkMove, updatePieceVisual, board, currentPlayer}) => {
  return (
    <div className="board">
      <div className="board__piece board__1x1" 
        onClick={ () => checkMove(0, 'board__1x1')}>
      </div>
      <div className="board__piece board__1x2"         
        onClick={ () => checkMove(1, 'board__1x2')}>
      </div>
      <div className="board__piece board__1x3"         
        onClick={ () => checkMove(2, 'board__1x3')}>
      </div>
      <div className="board__piece board__2x1"         
        onClick={ () => checkMove(3, 'board__2x1')}>
      </div>
      <div className="board__piece board__2x2"         
        onClick={ () => checkMove(4, 'board__2x2')}>
      </div>
      <div className="board__piece board__2x3"         
        onClick={ () => checkMove(5, 'board__2x3')}>
      </div>
      <div className="board__piece board__3x1"         
        onClick={ () => checkMove(6, 'board__3x1')}>
       </div>
      <div className="board__piece board__3x2"         
        onClick={ () => checkMove(7, 'board__3x2')}>
      </div>
      <div className="board__piece board__3x3"         
        onClick={ () => checkMove(8, 'board__3x3')}>
      </div>
    </div>
  )
}

Board.propTypes = {

}

export default Board
