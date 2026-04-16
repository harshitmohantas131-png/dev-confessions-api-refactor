// Service handles business logic and data operations
let confessions = []
let confessionIdCounter = 0

const categories = ["bug", "deadline", "imposter", "vibe-code"]

function createConfession(data) {
  if (!data || !data.text) throw { status: 400, msg: 'need text' }
  if (data.text.length === 0) throw { status: 400, msg: 'too short' }
  if (data.text.length >= 500) throw { status: 400, msg: 'text too long' }
  if (!categories.includes(data.category)) throw { status: 400, msg: 'invalid category' }

  const newConfession = {
    id: ++confessionIdCounter,
    text: data.text,
    category: data.category,
    created_at: new Date()
  }

  confessions.push(newConfession)
  return newConfession
}

function getAllConfessions() {
  const sorted = [...confessions].sort((a, b) => b.created_at - a.created_at)
  return { data: sorted, count: sorted.length }
}

function getConfessionById(id) {
  const confession = confessions.find(c => c.id === id)
  if (!confession) throw { status: 404, msg: 'not found' }
  return confession
}

function getConfessionsByCategory(cat) {
  if (!categories.includes(cat)) throw { status: 400, msg: 'invalid category' }
  return confessions.filter(c => c.category === cat).reverse()
}

function deleteConfession(id, token) {
 if (token !== process.env.DELETE_TOKEN)
 throw { status: 403, msg: 'no permission' }

  const index = confessions.findIndex(c => c.id === id)
  if (index === -1) throw { status: 404, msg: 'not found' }

  const deleted = confessions.splice(index, 1)
  return deleted[0]
}

module.exports = {
  createConfession,
  getAllConfessions,
  getConfessionById,
  getConfessionsByCategory,
  deleteConfession
}