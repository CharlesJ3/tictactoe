import React from 'react'
import './Board.css'
import PropTypes from 'prop-types'

const Board = ({ checkMove }) => {
  return (
    <div className="board">
      <div className="board__piece board__1x1" onClick={() => checkMove(this)}></div>
      <div className="board__piece board__1x2" onClick={() => checkMove(this)}></div>
      <div className="board__piece board__1x3" onClick={() => checkMove(this)}></div>
      <div className="board__piece board__2x1" onClick={() => checkMove(this)}></div>
      <div className="board__piece board__2x2" onClick={() => checkMove(this)}></div>
      <div className="board__piece board__2x3" onClick={() => checkMove(this)}></div>
      <div className="board__piece board__3x1" onClick={() => checkMove(this)}></div>
      <div className="board__piece board__3x2" onClick={() => checkMove(this)}></div>
      <div className="board__piece board__3x3" onClick={() => checkMove(this)}></div>
    </div>
  )
}

Board.propTypes = {

}

export default Board
