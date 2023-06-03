import { useState } from 'react'

export default function Form(props) {
  const { guardarPedido } = props
  const [pedido, setPedido] = useState('')
  const [cantidad, setCantidad] = useState(0)


  const onChangePedido = e => {
    setPedido(e.target.value)
  }

  const onChangeCantidad = e => {
    setCantidad(e.target.value)
  }

  }

  const validarForm = () => {
   
  
    const handleSubmit = e => {
      e.preventDefault()
      if (validarForm()) {
        guardarPedido(pedido, cantidad)
        setPedido('')
        setCantidad(0)
      }
    }
  
    return (
        <div>
        <h1>¿QUE DESEA PEDIR?</h1>
        <form onSubmit={handleSubmit} className='form'>
          <input
            type='text'
            id="pedido"
            value={pedido}
            placeholder='Ingrese su pedido'
            onChange={onChangePedido}
          />
  
          <label htmlFor='cantidad'><Cantidad></Cantidad> 🔢</label>
          <input
            type='number'
            id='cantidad'
            value={cantidad}
            placeholder='Ingrese una cantidad'
            onChange={onChangeCantidad}
          />
          <button>ENVIAR 📨</button>
        </form>
        </div>
    )
  }