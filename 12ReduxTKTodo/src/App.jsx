import { useState } from 'react'
import './App.css'
import { useSelector } from 'react-redux'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {

  const todos = useSelector(state => state.todos)

  return (
    <>
      <AddTodo />
      <div className="flex flex-wrap gap-y-3">
        {todos.map((todo) => (
            <div key={todo.id} className='w-full'>
                <Todos todo={todo} />
            </div>
          ))}
      </div>
    </>
  )
}

export default App