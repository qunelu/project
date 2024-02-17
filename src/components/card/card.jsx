import './card.scss'

export default function Card(props) {
  return (
    <div className="cards">
        <p className='text'>{props.object.comment}</p>
    </div>
  )
}
