import styles from './Header.module.css'
import logo from '../assets/Ignite-simbol.png'

export function Header(){
    return(
        <div className={styles.header}>
            <img src={logo} alt="" />
        </div>
    )
}