import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './assets/Componentes/Header'
import Home from './assets/Componentes/Home'
import Rodape from './assets/Componentes/Rodape'
import Escocia from './assets/Componentes/Escocia'
import Muralha from './assets/Componentes/Muralha_china'
import Grand from './assets/Componentes/Grand'
import Aruba from './assets/Componentes/Aruba'

import './App.css'

function App() {


  return (
    <>
      <Router>
          <Header />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Escocia' element={<Escocia />} />
              <Route path='/Grand' element={<Grand />} />
              <Route path='/Muralhas' element={<Muralha />} />
              <Route path='/Aruba' element={<Aruba />} />
          </Routes>
          <Rodape />
      </Router>
    </>
  )
}

export default App
