/**
 * Bir görevin yapısı:
 * @typedef {Object} Todo
 * @property {string} id          - Her görevin benzersiz kimliği
 * @property {string} text        - Görevin metni
 * @property {boolean} completed  - Tamamlandı mı?
 * @property {string} createdAt   - Oluşturulma tarihi
 */

export function createTodo(text) {
  return {
    id: crypto.randomUUID(),
    text: text.trim(),
    completed: false,
    createdAt: new Date().toISOString(),
  }
}