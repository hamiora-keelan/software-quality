import { Outlet, Link } from 'react-router-dom'

const App = () => {
  return (
    <div className="app-container">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              View Animals
            </Link>
          </li>
          <li className="nav-item">
            <Link to="add" className="nav-link">
              Add Animal
            </Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default App
