import superagent from 'superagent'
import { Animal } from '../../models/animalType'

export async function fetchAllAnimals(): Promise<Animal[]> {
  const response = await superagent.get('/api/v1/animals')
  return response.body
}

export async function removeAnimalById(id: number): Promise<void> {
  await superagent.delete(`/api/v1/animals/${id}`)
}

export async function createAnimal(animal: Animal): Promise<void> {
  await superagent.post('/api/v1/animals').send(animal)
}

export async function fetchAnimalById(id: number): Promise<Animal> {
  const response = await superagent.get(`/api/v1/animals/${id}`)
  return response.body
}
