import { Link } from 'react-router-dom'
import { useFetchAnimals } from '../hooks/useAnimals'

const AnimalComponent = () => {
  const { animals, loading, error } = useFetchAnimals()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Failed to fetch animals</div>

  return (
    <div>
      <h1>Animals</h1>
      <ul className="animal-list">
        {animals.map((animal) => (
          <li key={animal.id} className="animal-item">
            <div className="animal-image-box">
              <img
                src={animal.image}
                alt={animal.name}
                className="animal-image"
              />
            </div>
            <div className="animal-info">
              <p>
                <Link to={`/animals/${animal.id}`}>{animal.name}</Link> -{' '}
                {animal.species}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AnimalComponent
