import React from 'react'
import PropTypes from 'prop-types'
import Score from '../Score/Score'
import Board from '../Board/Board'

const GameArea = ({checkMove}) => {
  return (
    <div className="gameArea">
      <Board checkMove={checkMove}/>
      <Score />
    </div>
  )
}

GameArea.propTypes = {

}

export default GameArea
