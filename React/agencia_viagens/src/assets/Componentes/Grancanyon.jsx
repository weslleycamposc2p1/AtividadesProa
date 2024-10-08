import styles from '../css/Grancanyon.module.css'
import ComponenteProps from './ComponenteProps'
import bandeira from '../imagens/flag_usa.png'

function Grancanyon(){
    return(
        <div className={styles.fundo2}>

            <ComponenteProps 
                lugar="Grand Canyon"
                texto="Montanhas Rochosas"
                bandeira_pais={bandeira}
            
            /> 

        </div>

    )
}

export default Grancanyon

