import './coffee.scss'


export default function coffee(props) {
  return (
    <div className="card">
        <h3 className='title'>
            {props.title}
        </h3>
        <p className='cost'>
            {props.cost}
        </p>
    </div>
  )
}
