import React from 'react';
import Card from 'react-bootstrap/Card';

function PlayingCard(props){

  return (
    <card>
      Name: {props.data.name}
    </card>
  )
}

export default PlayingCard;