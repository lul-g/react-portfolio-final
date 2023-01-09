import "../title/title.css";

export default function PageHeading(props) {
  return (
    <div className='title'>
      <h1>{props.heading}</h1>
      <p>{props.description}</p>
    </div>
  );
}
