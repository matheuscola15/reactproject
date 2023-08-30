import { useState } from 'react'
import Buscador from './Buscador';
import styles from './Cardapio.module.scss'
import logo from '/reactproject/src/assets/logo.png'

export default function Cardapio() {
    const [busca, setBusca] = useState("");
    return(
        <main>
            <nav className={styles.menu}>
                <img src={logo} className={styles.logo} alt="logo" />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    Cola
                </div>
            </header>
            <section>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <Buscador busca={busca} setBusca={setBusca}/>
            </section>
        </main>
    )
}