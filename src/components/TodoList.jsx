import TodoItem from './TodoItem'

function TodoList({ todos, onUpdate, onDelete }) {
  if (todos.length === 0) {
    return (
      <p className="text-center text-gray-400 py-6">
        Henüz görev yok. Yukarıdan bir tane ekle!
      </p>
    )
  }

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </ul>
  )
}

export default TodoList