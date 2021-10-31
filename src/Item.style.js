import styled from 'styled-components'
import { Container, Col, Row, Modal } from 'react-bootstrap'

export const FavButton = styled.button`
    text-align: center;
    width: 50%;
    background-color: #80b3ff;
    :hover{
      background-color: #3385ff
    }
`
export const ModalContainer = styled(Modal)`
    text-transform: uppercase;
`
export const PokemonImage1 = styled.img`
    height: 200px;
    width: 200px;
    margin: 25px;
`
export const ImageCol = styled(Col)`
    text-align: center;
`
export const CustomRow = styled(Row)`
    margin-top: 25px;
    margin-bottom: 25px;
    text-align: center;
`
export const AbilityIconCol = styled(Col)`
    margin-bottom: 15px;
`
export const MainContainer = styled.div`
    background-color: #ffff00;
    padding-right: 15px;
    border-radius: 25px;
    margin-bottom: 25px;
    @media (max-width: 991){
        padding-bottom: 15px;
    }
`
export const ButtonCol = styled(Col)`
    display: grid;
    margin-right: 15px;
    @media (max-width: 991px) {
        display: block;
        text-align: center;
        padding-top: 15px;
    }
`
export const ButtonContainer = styled(Container)`
  position:relative;
  text-align: center;
`
export const LeftButton = styled.button`
  background-color: #80b3ff;
  position:absolute;
  left:0;
  :hover{
    background-color: #3385ff
  }
`
export const RightButton = styled.button`
  background-color: #80b3ff;
  position:absolute;
  right:0;
  :hover{
    background-color: #3385ff
  }
`
export const PokemonRow = styled(Row)`
  margin-bottom: 50px;
`
export const PokemonCol = styled(Col)`
  text-align: center;
`
export const PokemonImage2 = styled.img`
    height: 125px;
    width: 125px;
`
export const PokemonBlock = styled.div`
    margin: 5px;
    padding-bottom: 15px;
    text-transform: uppercase;
    border-radius: 50%;
    border: 5px solid red;
`
export const ButtonCustom = styled.button`
    border-radius: 50%;
    margin: 2px;
    background-color: #80b3ff;
    :hover{
      background-color: #3385ff
    }
`
export const PokemonImage3 = styled.img`
    height: 250px;
    width: 250px;
`
export const SeparatorDiv = styled.div`
    border: 1px solid;
    border-radius: 25px;
`
