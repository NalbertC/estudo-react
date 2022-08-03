import React, { useState } from 'react'

import './style.css'

import { Card } from '../../components/Card'

export function Home() {
  const [studentName, setStudentName] = useState()

  return (
    <div className='container'>
      <h1>Nome : {studentName} </h1>
      <input
        type="text"
        placeholder="Digite o nome ..."
        onChange={e => setStudentName(e.target.value)}
      />
      <button type="button">Adicionar</button>

      <Card name="Nalberth Castro" time="12:34:23" />
      <Card name="Vitória Peres" time="09:32:09" />
      <Card name="Anna Maria" time="08:45:41" />
    </div>
  )
}

