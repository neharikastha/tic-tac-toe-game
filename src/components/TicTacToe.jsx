import React, { useState } from 'react';
import '../styles/TicTacToe.css';
import Box from './Box';
import circle_icon from '../assets/circle.png';
import cross_icon from '../assets/cross.png';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningLineIndex, setWinningLineIndex] = useState(null);

  const winningPatterns = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal TL-BR
    [2, 4, 6], // Diagonal TR-BL
  ];

  const checkWinner = (newBoard) => {
    for (let i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[b] === newBoard[c]) {
        setWinner(newBoard[a]);
        setWinningLineIndex(i);
        return;
      }
    }
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = isXTurn ? 'x' : 'o';
    setBoard(newBoard);
    setIsXTurn(!isXTurn);
    checkWinner(newBoard);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setIsXTurn(true);
    setWinner(null);
    setWinningLineIndex(null);
  };

  return (
    <div className="container">
      <h1 className="title">Tic Tac Toe</h1>
      <div className="status">
        {winner ? (
          <>
            Winner: <img src={winner === 'x' ? cross_icon : circle_icon} alt="winner" className="icon" />
          </>
        ) : (
          `Turn: ${isXTurn ? 'X' : 'O'}`
        )}
      </div>
      <div className="board">
        {board.map((value, index) => (
          <Box key={index} value={value} onClick={() => handleClick(index)} />
        ))}
        {winner && (
          <div className={`winning-line line-${winningLineIndex}`}></div>
        )}
      </div>
      <button className="reset" onClick={handleReset}>Reset</button>
    </div>
  );
};

export default TicTacToe;
