import React, { useState } from 'react'

import './style.css'

import { Card } from '../../components/Card'

export function Home() {
  const [studentName, setStudentName] = useState() //estado [valor, funcao que atualiza o estado]
  const [students, setStudensts] = useState([])

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }

    setStudensts(prevState => [...prevState, newStudent])
  }

  return (
    <div className='container'>
      <h1>Lista de presença</h1>
      <input
        type="text"
        placeholder="Digite o nome ..."
        onChange={e => setStudentName(e.target.value)}
      />
      <button type="button" onClick={handleAddStudent}>
        Adicionar
      </button>

      {
        students.map(student => <Card name={student.name} time={student.time} />)
      }
    </div>
  )
}

