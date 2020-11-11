import React from 'react';
import Card from 'react-bootstrap/Card';

function PlayingCard(props){

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.data.suit}</Card.Subtitle>
      </Card.Body>
    </Card>
  )
}

export default PlayingCard;