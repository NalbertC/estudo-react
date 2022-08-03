import './style.css'

import { Card } from '../../components/Card'

export function Home() {
  return (
    <div className='container'>
      <h1>Lista de presença</h1>
      <input type="text" placeholder="Digite o nome ..." />
      <button type="button">Adicionar</button>

      <Card name="Nalberth Castro" time="12:34:23" />
      <Card name="Vitória Peres" time="09:32:09"/>
      <Card name="Anna Maria" time="08:45:41"/>
    </div>
  )
}

