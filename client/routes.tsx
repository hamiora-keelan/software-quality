import { createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/App.tsx'
import AnimalComponent from './components/AnimalList.tsx'
import AddAnimalComponent from './components/AddAnimal.tsx'
import SingleAnimal from './components/SingleAnimal.tsx'

const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<AnimalComponent />} />
    <Route path="/add" element={<AddAnimalComponent />} />
    <Route path="/animals/:id" element={<SingleAnimal />} />
  </Route>,
)

export default routes
