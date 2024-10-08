import styles from '../css/Rodape.module.css'
import insta from '../imagens/insta.jpg'
import face from '../imagens/face.jpg'
import tiktok from '../imagens/tiktok.png'
import whats from '../imagens/whtas.png'


function Rodape(){

    return(

        <footer className={styles.corpo}>
            <h3>Siga-nos nas redes ssosiaiz</h3>
            
            <div className={styles.icones}>
                <img src={insta} alt="insta" />
                <img src={face} alt="face" />
                <img src={tiktok} alt="tiktok" />
                <img src={whats} alt="whats" />
            </div>

            <h3>telefone de contact - (11) 99999-9999</h3>
        </footer>

    )
}
export default Rodape