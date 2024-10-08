import styles from '../css/Escocia.module.css'
import ComponenteProps from './ComponenteProps'
import bandeira from '../imagens/flag_escocia.png'

function Escocia(){
    return(
        <div className={styles.fundo}>

            <ComponenteProps 
                lugar="Escócia"
                texto="Castelos medievais, lindas florestas, boa cerveja, comidas típicas, ambiente acolhedor e etc."
                bandeira_pais={bandeira}
            
            /> 

        </div>
        
    )
}

export default Escocia 