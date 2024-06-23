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
      <h2>Add a new animal</h2>
      {error && <div>{error}</div>}
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newAnimal.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="species"
          placeholder="Species"
          value={newAnimal.species}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newAnimal.image}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Add Animal</button>
      </div>
    </div>
  )
}

export default AddAnimalComponent
