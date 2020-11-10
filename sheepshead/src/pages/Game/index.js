import React, { useState, useEffect } from 'react';
import Hand from '../../components/Hand';
import Card from '../../components/Card';
import cards from '../../assets/cards';

function Game(){

  let deck;

  const [getCards, setCards] = useState(cards);
  const [getScores, setScores] = useState([0,0,0,0,0]);

  deck = getCards;

  let player1Hand = getCards.slice(0,6);
  let player2Hand = getCards.slice(6,12);
  let player3Hand = getCards.slice(12,18);
  let player4Hand = getCards.slice(18,24);
  let player5Hand = getCards.slice(24,30);

  let hand1 = '';
  let hand2 = '';
  let hand3 = '';
  let hand4 = '';
  let hand5 = '';

  for(let i=0; i<6; i++){
    hand1 += player1Hand[i].name;
    hand2 += player2Hand[i].name;
    hand3 += player3Hand[i].name;
    hand4 += player4Hand[i].name;
    hand5 += player5Hand[i].name;
  }

  return (
    <div>
      Player 1 hand: {hand1}
      Player 2 hand: {hand2}
      Player 3 hand: {hand3}
      Player 4 hand: {hand4}
      Player 5 hand: {hand5}
    </div>
  )
}

export default Game;