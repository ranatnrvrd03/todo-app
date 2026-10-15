import { useState, useEffect } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'
import { createTodo } from '../interfaces/todo'

function Home() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (text) => {
    setTodos([createTodo(text), ...todos])
  }

  const updateTodo = (id, changes) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, ...changes } : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-6">
        <h1 className="text-3xl font-bold text-blue-600 text-center mb-6">
          Todo App
        </h1>

        <TodoForm onAdd={addTodo} />
        <TodoList todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />

        <p className="text-center text-gray-500 mt-4">
          Toplam görev: {todos.length}
        </p>
      </div>
    </div>
  )
}

export default Home