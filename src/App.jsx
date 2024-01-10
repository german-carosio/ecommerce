import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='container'>
        {/* BrowserRouter envuelve a todo lo que se navegue  */}
        <BrowserRouter> 
          <NavBar />
          {/* Todo lo que se muestre condicionalmente va a ir en Routes lo que no por fuera (NavBar) */}
          <Routes>
            {/* en cada ruta muestro un elemento (componente) */}
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            {/* el nombre que le de al params es el mismo que luego debo usar en el componente para identificar el id (useParams) */}
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </BrowserRouter>
      </div>


    </>
  )
}

export default App
