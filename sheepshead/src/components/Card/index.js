const Card = (props) => {

  return (
    <div className='card'>
      <h1>{props.name}</h1>
      <img src={props.image}></img>
    </div>
  )
}

export default Card;