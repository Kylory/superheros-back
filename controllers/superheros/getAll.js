const { getAllSuperheroes } = require('../../model/superheros/index')

const getAll = async (req, res) => {
  const { page, limit } = req.query
  const superheroes = await getAllSuperheroes(page, limit)

  res.status(200).json({ superheros })
}

module.exports = { getAll }
