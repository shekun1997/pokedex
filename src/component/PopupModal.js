import { Modal, Row, Col } from 'react-bootstrap'
import { FaWeight, FaSuperpowers } from 'react-icons/fa';
import { AiOutlineColumnHeight } from "react-icons/ai";
import { ModalContainer, PokemonImage3, ImageCol, CustomRow, AbilityIconCol, SeparatorDiv } from '../Item.style'

import Pokeball from '../image/pokeball.png'

const PopupModal = (props) => {
    const pokemonimg = props.pokemonimg
    const abilities = props.abilities
    const height = props.height
    const weight = props.weight
    const name = props.name

    return (
        <div>
            <ModalContainer
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <ImageCol xs={12}>
                            {pokemonimg ?
                            <PokemonImage3 src={pokemonimg}></PokemonImage3>
                            : <PokemonImage3 src={Pokeball}></PokemonImage3>}
                        </ImageCol>
                        <Col>
                            <CustomRow>
                                <Col>
                                    <SeparatorDiv>
                                        <Row>
                                            <Col><AiOutlineColumnHeight size={30}/></Col>
                                            <Col>{height}</Col>
                                        </Row>
                                    </SeparatorDiv>
                                </Col>
                                <Col>
                                    <SeparatorDiv>
                                        <Row>
                                            <Col><FaWeight size={30}/></Col>
                                            <Col>{weight}</Col>
                                        </Row>
                                    </SeparatorDiv>
                                </Col>
                            </CustomRow>
                            <SeparatorDiv>
                                <CustomRow>
                                    <AbilityIconCol lg={12}>
                                        <FaSuperpowers size={30}/>
                                    </AbilityIconCol>
                                    {abilities &&
                                    abilities.map(ability => (
                                        <Col lg={6}>{ability.ability.name}</Col>
                                    ))}
                                </CustomRow>
                            </SeparatorDiv>
                        </Col>
                    </Row>
                </Modal.Body>
            </ModalContainer>
        </div>
    )
}

export default PopupModal
