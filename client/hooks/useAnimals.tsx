import { useState, useEffect } from 'react'
import { Animal } from '../../models/animalType'
import * as API from '../apis/animalAPI'

export function useFetchAnimals() {
  const [animals, setAnimals] = useState<Animal[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchAnimals = async () => {
    setLoading(true)
    try {
      const animals = await API.fetchAllAnimals()
      setAnimals(animals)
      setError(null)
    } catch (err) {
      setError('Failed to fetch animals')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAnimals()
  }, [])

  return { animals, loading, error, refetch: fetchAnimals }
}

export function useDeleteAnimal() {
  const [error, setError] = useState<string | null>(null)

  const deleteAnimal = async (id: number) => {
    try {
      await API.removeAnimalById(id)
      setError(null)
    } catch (err) {
      setError('Failed to delete animal')
    }
  }

  return { deleteAnimal, error }
}

export function useAddAnimal() {
  const [error, setError] = useState<string | null>(null)

  const addAnimal = async (animal: Animal) => {
    try {
      await API.createAnimal(animal)
      setError(null)
    } catch (err) {
      setError('Failed to add animal')
    }
  }

  return { addAnimal, error }
}

export function useFetchAnimalById(id: number) {
  const [animal, setAnimal] = useState<Animal | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchAnimal = async () => {
    setLoading(true)
    try {
      const fetchedAnimal = await API.fetchAnimalById(id)
      setAnimal(fetchedAnimal)
      setError(null)
    } catch (err) {
      setError('Failed to fetch animal')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAnimal()
  }, [id])

  return { animal, loading, error, refetch: fetchAnimal }
}
