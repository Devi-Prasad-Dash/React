import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos({ todo }) {
   
    const[isTodoEditable, setIsTodoEditable] = React.useState(false)
    const dispatch = useDispatch()
    const [todoMsg, setTodoMsg] = React.useState(todo.text)
    
    const editTodo = () => {
        dispatch(updateTodo(todo.id, todoMsg))
        setIsTodoEditable(false)
    }

  return (
      <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-white`}>
        <input
            type="text"
            className={`border outline-none w-full bg-transparent rounded-lg ${
                isTodoEditable ? "border-black/10 px-2" : "border-transparent"
            }`}
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isTodoEditable}
        />
        {/* Edit, Save Button */}
            
        <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
            onClick={() => {

                if (isTodoEditable) {
                    editTodo()
                } else setIsTodoEditable((prev) => !prev);
            }}
        >
            {isTodoEditable ? "📁" : "✏️"}
        </button>
            
        {/* Delete Todo Button */}
            
        <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={() => dispatch(removeTodo(todo.id))}
        >
            ❌
        </button>
    </div>
  )
}

export default Todos