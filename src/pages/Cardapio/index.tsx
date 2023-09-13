import styles from './Cardapio.module.scss'
import logo from '/reactproject/src/assets/logo2.svg'
import { useState } from 'react';
import Buscador from './Buscador';
import Filtros from './Filtros';

export default function Cardapio() {
    const [busca, setBusca] = useState("");
    return(
        <main>
            <nav className={ styles.menu }>
                <img src={logo} alt="logo casa del taco" />
            </nav>
            <header className={ styles.header }>
                <div className={ styles.header__text }>
                    A casa do código e da massa
                </div>
            </header>
            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Cardápio</h3>
                <Buscador busca={busca} setBusca={setBusca}/>
                <div className={styles.cardapio__filtros}>
                <Filtros/>
                </div>
            </section>
        </main>
    );
}