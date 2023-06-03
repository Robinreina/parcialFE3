import './App.css'
import Card from './Card'
import Form from './Form'
import { useState } from 'react'

function App() {
  const [pedido, setPedido] = useState({})

  const guardarPedido = (pedido, cantidad) => {
    setPedido({pedido, cantidad})
  }
  return (
    <>
      <Form guardarPedido={guardarPedido} />

      {Object.keys(pedido).length === 0 ? undefined : (
        <Card
          pedido={pedido.pedido}
          cantidad={pedido.cantidad}
        />
      )}
    </>
  )
}

export default App