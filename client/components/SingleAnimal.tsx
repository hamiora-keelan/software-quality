import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Animal } from '../../models/animalType'
import * as API from '../apis/animalAPI'
import DeleteAnimalComponent from './DeleteAnimal'

const SingleAnimal = () => {
  const { id } = useParams<{ id: string }>()
  const [animal, setAnimal] = useState<Animal | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const fetchedAnimal = await API.fetchAnimalById(Number(id))
        setAnimal(fetchedAnimal)
      } catch (err) {
        setError('Failed to fetch animal')
      } finally {
        setLoading(false)
      }
    }

    fetchAnimal()
  }, [id])

  const handleDelete = () => {
    navigate('/')
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>
  if (!animal) return <div>No animal found</div>

  return (
    <div>
      <h1>{animal.name}</h1>
      <span className="animal-image-box">
        <img src={animal.image} alt="" className="animal-image" />
      </span>

      <p>Species: {animal.species}</p>
      <DeleteAnimalComponent animal={animal} onDelete={handleDelete} />
    </div>
  )
}

export default SingleAnimal
