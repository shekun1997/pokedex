import usePokemonDetail from '../usePokemonDetail'
import Pokeball from '../image/pokeball.png'
import PopupModal from './PopupModal'
import { useState } from 'react'
import { GrView, GrFavorite } from "react-icons/gr";
import { PokemonImage2, PokemonBlock, ButtonCustom } from '../Item.style'

const PokemonDetail = ({ pokemon }) => {
    const { pokemonimg, abilities, height, weight } = usePokemonDetail(pokemon.url)
    const [modalShow, setModalShow] = useState(false)

    function addFav(pokemonurl){
        if(localStorage.getItem('favorite') == null){
            localStorage.setItem('favorite', '[]')
        }
        const old_fav = JSON.parse(localStorage.getItem('favorite'))
        for(let x = 0; x <= old_fav.length; x++){
            if(old_fav[x] === pokemonurl){
                return alert("The Pokemon is already your favorite!")
            }
        }
        old_fav.push(pokemonurl)
        localStorage.setItem('favorite', JSON.stringify(old_fav))
        return alert("Successfully added to favorrite!")
    }

    return (
        <PokemonBlock>
            {pokemonimg ?
                <PokemonImage2 src={pokemonimg} alt={pokemon.name}></PokemonImage2>
                : <PokemonImage2 src={Pokeball} alt={pokemon.name}></PokemonImage2>}
            <h3>{pokemon.name}</h3>
            <ButtonCustom onClick={() => setModalShow(true)}><GrView/></ButtonCustom>
            <ButtonCustom onClick={() => addFav(pokemon.url)}><GrFavorite/></ButtonCustom>
            <PopupModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                pokemonimg={pokemonimg}
                abilities={abilities}
                height={height}
                weight={weight}
                name={pokemon.name}
            />
        </PokemonBlock>
    )
}

export default PokemonDetail
