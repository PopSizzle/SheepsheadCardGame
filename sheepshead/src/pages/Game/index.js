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

  console.log(deck);

  return (
    <Container>
      <Hand className='hand1'>
        {player1Hand}
      </Hand>
      <Hand className='hand2'>
        {player2Hand}
      </Hand>
      <Hand className='hand3'>
        {player3Hand}
      </Hand>
      <Hand className='hand4'>
        {player4Hand}
      </Hand>
      <Hand className='hand5'>
        {player5Hand}
      </Hand>


    </Container>
  )
}

export default Game;