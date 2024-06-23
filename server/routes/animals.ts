import { Router } from 'express'
import * as db from '../db/animals'
import { Animal } from '../../models/animalType'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const animals = await db.getAllAnimals()
    res.json(animals)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch animals' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const animal = await db.getAnimalById(Number(id))
    if (animal) {
      res.json(animal)
    } else {
      res.status(404).json({ error: 'Animal not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch animal' })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await db.deleteAnimalById(Number(id))
    if (deleted) {
      res.sendStatus(204)
    } else {
      res.status(404).json({ error: 'Animal not found' })
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete animal' })
  }
})

router.post('/', async (req, res) => {
  try {
    const newAnimal: Animal = req.body
    await db.addAnimal(newAnimal)
    res.status(201).json(newAnimal)
  } catch (error) {
    res.status(500).json({ error: 'Failed to add animal' })
  }
})

export default router
