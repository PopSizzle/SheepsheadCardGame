import React from 'react';
import Card from 'react-bootstrap/Card';

function PlayingCard(props){

  return (
    <Card>
      Name: {props.data.name}
    </Card>
  )
}

export default PlayingCard;