// import styled from 'styled-components'
import { Container, Col, Row } from 'react-bootstrap'
import { useState } from 'react'
import usePokemonList from '../usePokemonList'
import PokemonDetail from './PokemonDetail'
import FavoriteButton from './FavoriteButton'
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { ButtonContainer, LeftButton, RightButton, PokemonRow, PokemonCol } from '../Item.style'

const Home = () => {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon/')
  const { data: pokemons, next, previous, count } = usePokemonList(url)
  const pagecount = Math.ceil(count / 20)

  function handleChange(event) {
    const value = (event.target.value - 1)

    if(pagecount<=value ){
      document.getElementById('pageinput').value= "" ;
      alert('Last Page is '+pagecount)
    }else if(value === -1){
        return
    }else{
      setUrl('https://pokeapi.co/api/v2/pokemon/?offset='+value*20+'&limit=20')
    }
  }

  return (
    <Container>
      <ButtonContainer>
        <FavoriteButton/>
      </ButtonContainer>
      <PokemonRow>
        {pokemons ?
          pokemons.map(pokemon => (
            <PokemonCol lg={3} sm ={6} xs={12} key={pokemon.name}>
              <PokemonDetail pokemon={pokemon} />
            </PokemonCol>
          ))
          :
          <h2>Loading...</h2>
        }
      </PokemonRow>
      <ButtonContainer>
        <Col>
          <input type='number' name='goto' id="pageinput" placeholder="Go To" onChange={handleChange}></input>
        </Col>
        <Row>
          <Col lg={4} sm ={4} xs={4} >
            {previous &&
            <LeftButton onClick={() => setUrl(previous)}><GrLinkPrevious/></LeftButton>}
          </Col>
          <Col lg={4} sm ={4} xs={4} >
          </Col>
          <Col lg={4} sm ={4} xs={4} >
            {next &&
            <RightButton onClick={() => setUrl(next)}><GrLinkNext/></RightButton>}
          </Col>
        </Row>
      </ButtonContainer>
    </Container>
  )
}

export default Home