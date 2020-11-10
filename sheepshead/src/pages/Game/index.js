import React, { useState, useEffect } from 'react';
import Hand from '../../components/Hand';
import Card from '../../components/Card';
import cards from '../../assets/cards';
import Container from '../../components/Container';

function Game(){

  let deck;
  let scores;

  const [getCards, setCards] = useState(cards);
  const [getScores, setScores] = useState([1,2,3,4,5]);

  const shuffle = (arr) => {
    let j, x;

    for(let i=arr.length-1; i>0; i--){
      j = Math.floor(Math.random() * (i+1));
      x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
    }

    return arr;
  }

  deck = shuffle(getCards);

  scores = getScores;

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

  console.log(deck);

  return (
    <Container>
      Player 1 Hand:
      <Hand>
        {player1Hand}
      </Hand>
      Player 1 Score:
      {scores[0]}
      Player 2 Hand:
      <Hand>
        {player2Hand}
      </Hand>
      Player 2 Score:
      {scores[1]}
      Player 3 Hand:
      <Hand>
        {player3Hand}
      </Hand>
      Player 3 Score:
      {scores[2]}
      Player 4 Hand:
      <Hand>
        {player4Hand}
      </Hand>
      Player 4 Score:
      {scores[3]}
      Player 5 Hand:
      <Hand>
        {player5Hand}
      </Hand>
      Player 5 Score:
      {scores[4]}


    </Container>
  )
}

export default Game;