import style from './Buscador.module.scss'
import { CgSearch } from 'react-icons/cg'

type props = {
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>
}

export default function Buscador({busca, setBusca}: props) {

    return(
        <div className={style.buscador}>
            <input className={style.input} value={busca}
            onChange={(evento) => setBusca(evento.target.value)}
            type='text'
            placeholder='Buscar...'
            />
            <CgSearch size={20} color='#4c4d5e'/>
        </div>
    )
}