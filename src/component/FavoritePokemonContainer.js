import { Row, Col, Button } from 'react-bootstrap'
import { FaWeight, FaSuperpowers } from 'react-icons/fa';
import { AiOutlineColumnHeight } from "react-icons/ai";
import usePokemonDetail from '../usePokemonDetail'
import { PokemonImage1, ImageCol, CustomRow, AbilityIconCol, MainContainer, ButtonCol } from '../Item.style'

import Pokeball from '../image/pokeball.png'

const FavoritePokemonContainer = (props) => {
    const { pokemonimg, abilities, height, weight, name } = usePokemonDetail(props.pokemonurl)

    function deleteFav(pokemonurl){
        if(window.confirm('Are you sure want to remove this pokemon from your favorite list?')){
            const old_fav = JSON.parse(localStorage.getItem('favorite'))
            const index = old_fav.indexOf(pokemonurl)
            old_fav.splice(index, 1)
            localStorage.setItem('favorite', JSON.stringify(old_fav))
        }
    }

    return (
        <MainContainer>
            <Row>
                <ImageCol sm={12} lg={6}>
                    {pokemonimg ?
                    <PokemonImage1 src={pokemonimg} alt={name}></PokemonImage1>
                    : <PokemonImage1 src={Pokeball} alt={name}></PokemonImage1>}
                </ImageCol>
                <Col>
                    <CustomRow> 
                        <Col><AiOutlineColumnHeight size={30}/> {height}</Col>
                        <Col><FaWeight size={30}/> {weight}</Col>        
                    </CustomRow>
                    <CustomRow>
                        <AbilityIconCol lg={12}>
                            <FaSuperpowers size={30}/>Abilities
                        </AbilityIconCol>
                        {abilities &&
                        abilities.map(ability => (
                            <Col lg={6}>{ability.ability.name}</Col>
                        ))}
                    </CustomRow>
                </Col>
                <ButtonCol lg={1}>
                    <Button onClick={() => deleteFav(props.pokemonurl)}>Delete</Button>
                </ButtonCol>
            </Row>
        </MainContainer>
    )
}

export default FavoritePokemonContainer
