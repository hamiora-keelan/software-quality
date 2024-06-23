import connection from './connection'
import { Animal } from '../../models/animalType'

export async function getAllAnimals(): Promise<Animal[]> {
  return connection('animals').select('*')
}

export async function deleteAnimalById(id: number): Promise<number> {
  return connection('animals').where('id', id).del()
}

export async function addAnimal(animal: Animal): Promise<void> {
  await connection('animals').insert(animal)
}

export async function getAnimalById(id: number): Promise<Animal> {
  return connection('animals').where('id', id).first()
}
