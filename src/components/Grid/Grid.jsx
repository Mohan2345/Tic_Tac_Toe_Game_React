import React, { useState } from "react";
import Card from "../Card/Card";
import "./Grid.css";
import isWinner from "../../helpers/checkWinner";

function Grid({ numberOfCards }) {
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [turn, setTurn] = useState(true); // true for == o and false for == x
  const [winner, setWinner] = useState(null);
  function play(index) {
    if (turn == true) {
      board[index] = "o";
    } else 
    {
      board[index] = "x";
    }
    const win = isWinner(board, turn ? "o" : "x");
    if (win) {
      setWinner(win);
    }
    setBoard([...board]);
    setTurn(!turn);
  }

  function reset() {
    setBoard(Array(numberOfCards).fill(""));
    setTurn(true);
    setWinner(null);
  }

  return (
    <div className="grid-wrapper">
      {
        winner && (
        <>
          <h1 className="turn-highlight">Winner of the game is {winner}</h1>
          <button 
          className="reset"
          onClick={reset}
          >Reset Game</button>
        </>
        )
      }
      <h1 className="turn-highlight">Current Turn is {turn ? "o" : "x"}</h1>
      <div className="grid">
        {board.map((el, idx) => (
          <Card key={idx} gameEnd={winner ? true : false} onPlay={play} player={el} index={idx} />
        ))}
      </div>
    </div>
  );
}

export default Grid;
