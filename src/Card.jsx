export default function Card(props) {
  const { pedido, cantidad } = props
  return (
    <div className='card'>
      <hr />
      <h2>
        Tu pedido es: <span>{pedido}</span>
      </h2>
      <hr />
      <p>Cantidad {cantidad}</p>
      <hr />
    </div>
  )
}