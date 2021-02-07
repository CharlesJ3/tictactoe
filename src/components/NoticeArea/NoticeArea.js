import React from 'react';
import './NoticeArea.css';
import PropTypes from 'prop-types';

const NoticeArea = ({ currentPlayer, winner }) => {
  return (
    <div>
      <div className="noticeArea">
        <p className="currentPlayer">Current Player - {currentPlayer.toUpperCase()}</p>
        <p className="winner">{winner !== ''
          ? `The Winner is... ${winner.toUpperCase()}!`
          : 'Game In Progress'}
        </p>
      </div>
    </div>
  );
};


NoticeArea.propTypes = {

};


export default NoticeArea;
