import Container from '../Container';
import Card from '../Card';

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