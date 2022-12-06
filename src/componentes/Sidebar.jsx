import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar(){
    return (
        <div className={styles.mainDiv}>
            <aside className={styles.sidebar}>
                <img className={styles.cover}
                src="https://st3.depositphotos.com/10325396/18139/i/450/depositphotos_181398414-stock-photo-programming-code-abstract-technology-background.jpg" 
                alt=""
                />

                <div className={styles.profile}>
                    <Avatar hasBorder={true} src="https://avatars.githubusercontent.com/u/94126271?v=4"/>

                    <strong>Igor Vilhena</strong>
                    <span>Web Developer</span>
                </div>

                <footer>
                    <a href="">
                        <PencilLine />
                        Editar perfil
                    </a>
                </footer>
            </aside>
        </div>
        
    )
}