import Container from '../Container';
import Card from '../Card';

const Hand = (props) => {

  return(
    <Container>
      {props.map(object => (
        <Card>
          object.name
        </Card>
      ))}
    </Container>
  )
}

export default Hand;