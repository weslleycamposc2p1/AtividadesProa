import styles from '../css/Muralha_china.module.css'
import ComponenteProps from './ComponenteProps'
import bandeira from '../imagens/flag_china.png'

function Muralha_china(){
    return(
        <div className={styles.fundo3}>
              <ComponenteProps 
                lugar="Muralha da China"
                texto="você vai andar muito"
                bandeira_pais={bandeira}
            
            /> 
        </div>
    )
}

export default Muralha_china