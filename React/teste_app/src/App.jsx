
import loki from './assets/imgfilmes/Loki.jpg'
import kaiju from './assets/imgfilmes/Kaiju No 8.jpg'
import './App.css'

function App() {
 

  return (
    <>
      <div>
      <a href="https://react.dev" target="_blank">
          <img src={kaiju} className="loki" alt="Kaiju" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={loki} className="loki" alt="loki" />
        </a>
      </div>
      <h1>Testando o meu primeiro App em REACTJs</h1>
      
    </>
  )
}

export default App
