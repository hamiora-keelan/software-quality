import { useState } from 'react'
import { Animal } from '../../models/animalType'
import { useAddAnimal } from '../hooks/useAnimals'

const AddAnimalComponent = () => {
  const { addAnimal, error } = useAddAnimal()
  const [newAnimal, setNewAnimal] = useState<Partial<Animal>>({
    name: '',
    species: '',
    image: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setNewAnimal((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleAdd = async () => {
    await addAnimal(newAnimal as Animal)
  }

  return (
    <div>
      <h1>Add a new animal</h1>
      {error && <div>{error}</div>}
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={newAnimal.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="species">Species</label>
          <input
            type="text"
            id="species"
            name="species"
            placeholder="Species"
            value={newAnimal.species}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            placeholder="Image URL"
            value={newAnimal.image}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleAdd}>Add Animal</button>
      </div>
    </div>
  )
}

export default AddAnimalComponent
