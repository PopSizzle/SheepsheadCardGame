import Container from '../Container';
import Card from '../Card';

// Create a hand with 6 cards in it.
const Hand = (props) => {

  console.log(props);

  return(
    <Container>
      {props.children.map(object => (
        <Card data={object}>
        </Card>
      ))}
    </Container>
  )
}

export default Hand;