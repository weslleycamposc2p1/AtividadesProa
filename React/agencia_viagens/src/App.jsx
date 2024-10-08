import Header from './assets/Componentes/Header'
import Home from './assets/Componentes/Home'
import Escocia from './assets/Componentes/Escocia'
import Grancanyon from './assets/Componentes/Grancanyon'
import Muralha_china from './assets/Componentes/Muralha_china'
import Aruba from './assets/Componentes/Aruba'
import Rodape from './assets/Componentes/Rodape'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {


  return (
    <>
    <Router>
          <Header />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='Escocia' element={<Escocia />} />
              <Route path='Grancanyon' element={<Grancanyon />} />
              <Route path='Muralhachina' element={<Muralha_china />} />
              <Route path='Aruba' element={<Aruba />} />
          </ Routes>
          <Rodape />
      </Router>
    </>
  )
}

export default App
