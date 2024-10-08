
import Logo from '../imagens/viagens.jpg'
import Lupa from '../imagens/lupa.png'
import styles from '../css/Header.module.css'
import {Link} from 'react-router-dom'

function Header(){

    return(

        <header className={styles.content}>
          <Link to={"https://www.cvc.com.br/"}>
             <img src={Logo} alt="Logo" className={styles.logo} />
          </Link> 

            <nav className={styles.menu}>
                <ul>
                    <li><Link className={styles.link} to='/'>Home</Link></li>
                    <li><Link className={styles.link} to='Escocia'>Escocia</Link></li>
                    <li><Link className={styles.link} to='Grancanyon'>Grand Canyon</Link></li>
                    <li><Link className={styles.link} to='Muralhachina'>Muralhas da China</Link></li>
                    <li><Link className={styles.link} to='Aruba'>Aruba</Link></li>
                </ul>
            </nav>

            <div className={styles.login}>
                <input type="search" />
            </div>

            <img src={Lupa} alt="Lupa" className={styles.lupa} />
            
        </header>


    )
}
export default Header