import React from 'react';
import '../styles/Box.css';
import circle_icon from '../assets/circle.png';
import cross_icon from '../assets/cross.png';

const Box = ({ value, onClick }) => {
  return (
    <div className="box" onClick={onClick}>
      {value === 'x' && <img src={cross_icon} alt="X" className="icon" />}
      {value === 'o' && <img src={circle_icon} alt="O" className="icon" />}
    </div>
  );
};

export default Box;
