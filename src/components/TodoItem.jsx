import { useState } from 'react'

function TodoItem({ todo, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleSave = (e) => {
    e.preventDefault()
    if (!editText.trim()) return
    onUpdate(todo.id, { text: editText.trim() })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditText(todo.text)
    setIsEditing(false)
  }

  if (isEditing) {
    return (
      <li className="border border-blue-300 rounded-lg px-4 py-3">
        <form onSubmit={handleSave} className="flex gap-2">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus
            className="flex-1 min-w-0 border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="text-sm bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600"
          >
            Kaydet
          </button>
          <button
            type="button"
            onClick={handleCancel}
            className="text-sm bg-gray-400 text-white px-3 py-1 rounded-lg hover:bg-gray-500"
          >
            İptal
          </button>
        </form>
      </li>
    )
  }

  return (
    <li className="flex items-center justify-between gap-2 border border-gray-200 rounded-lg px-4 py-3">
      <span className="text-gray-800 break-words min-w-0">{todo.text}</span>

      <div className="flex gap-2 shrink-0">
        <button
          onClick={() => setIsEditing(true)}
          className="text-sm bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600"
        >
          Düzenle
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="text-sm bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
        >
          Sil
        </button>
      </div>
    </li>
  )
}

export default TodoItem