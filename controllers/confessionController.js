// Controller handles HTTP request/response
const service = require('../services/confessionService')

function create(req, res) {
  try {
    const result = service.createConfession(req.body)
    res.status(201).json(result)
  } catch (err) {
    res.status(err.status || 500).json({ msg: err.msg })
  }
}

function getAll(req, res) {
  const result = service.getAllConfessions()
  res.json(result)
}

function getOne(req, res) {
  try {
    const result = service.getConfessionById(parseInt(req.params.id))
    res.json(result)
  } catch (err) {
    res.status(err.status).json({ msg: err.msg })
  }
}

function getByCategory(req, res) {
  try {
    const result = service.getConfessionsByCategory(req.params.cat)
    res.json(result)
  } catch (err) {
    res.status(err.status).json({ msg: err.msg })
  }
}

function remove(req, res) {
  try {
    const result = service.deleteConfession(
      parseInt(req.params.id),
      req.headers['x-delete-token']
    )
    res.json({ msg: 'ok', item: result })
  } catch (err) {
    res.status(err.status).json({ msg: err.msg })
  }
}

module.exports = {
  create,
  getAll,
  getOne,
  getByCategory,
  remove
}