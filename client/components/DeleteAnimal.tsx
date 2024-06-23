import { useDeleteAnimal } from '../hooks/useAnimals'
import { Animal } from '../../models/animalType'

interface Props {
  animal: Animal
  onDelete: () => void
}

const DeleteAnimalComponent: React.FC<Props> = ({ animal, onDelete }) => {
  const { deleteAnimal } = useDeleteAnimal()

  const handleDelete = async () => {
    await deleteAnimal(animal.id)
    onDelete()
  }

  return (
    <div>
      <p>
        {animal.name} - {animal.species}
      </p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default DeleteAnimalComponent
