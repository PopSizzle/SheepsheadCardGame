import Container from '../Container';
import PlayingCard from '../Card';
import './hand.css';

// Create a hand with 6 cards in it.
const Hand = (props) => {

  console.log(props);

  return(
    <Container>
      {props.children.map(object => (
        <PlayingCard data={object}>
        </PlayingCard>
      ))}
    </Container>
  )
}

export default Hand;