import styles from '../css/Aruba.module.css'
import ComponenteProps from './ComponenteProps'
import bandeira from '../imagens/flag_aruba.png'
function Aruba(){
    return(
        <div className={styles.fundo4}>

             <ComponenteProps 
                lugar="Aruba"
                texto="Praia linda, água cristalina"
                bandeira_pais={bandeira}
            
            /> 
        </div>
    )
}

export default Aruba