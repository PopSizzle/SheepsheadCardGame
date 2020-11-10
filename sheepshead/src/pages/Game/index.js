import React, { useState, useEffect } from 'react';
import Hand from '../../components/Hand';
import Card from '../../components/Card';
import cards from '../../assets/cards';

function Game(){
  const [getCards, setCards] = useState([]);
  const [getScores, setScores] = useState([]);

  useEffect(() => {
    setCards([
      cards
    ])

    setScores([0,0,0,0,0])
  })

  let player1Hand = getCards.slice(0,6);
  let player2Hand = getCards.slice(6,12);
  let player3Hand = getCards.slice(12,18);
  let player4Hand = getCards.slice(18,24);
  let player5Hand = getCards.slice(24,30);
  

  return (
    <div>
      Player 1 hand: {player1Hand}
      Player 2 hand: {player2Hand}
      Player 3 hand: {player3Hand}
      Player 4 hand: {player4Hand}
      Player 5 hand: {player5Hand}
    </div>
  )
}

export default Game;