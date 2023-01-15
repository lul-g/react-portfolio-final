export default function Circle(props) {
  return (
    <div className='circle'>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
      <img src={props.img} alt='' />
    </div>
  );
}
