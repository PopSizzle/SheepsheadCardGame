import React, { useState, useEffect } from 'react';
import Hand from '../../components/Hand';
import Card from '../../components/Card';
import cards from '../../assets/cards';

const Game = () =>{
  const [getCards, setCards] = useState([]);
  const [getScores, setScores] = useState([]);

  useEffect(() => {
    setCards([
      cards
    ])
  })

  const deal = () => {
    
  }

}

export default Game;