import { Modal } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import FavoritePokemonContainer from './FavoritePokemonContainer'
import { ModalContainer } from '../Item.style'

const PopupModal = (props) => {
    const [data, setData] = useState(JSON.parse(localStorage.getItem("favorite")));
    
    useEffect(() => {
        if(data !== JSON.parse(localStorage.getItem('favorite'))){
            setData(JSON.parse(localStorage.getItem('favorite')))
        }
    }, [data])
    
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
                        Favorite Pokemon
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {data ?
                        data.map(pokemonurl => (
                            <FavoritePokemonContainer pokemonurl={pokemonurl}/>
                        )):
                        <p>Empty</p>
                    }
                </Modal.Body>
            </ModalContainer>
        </div>
    )
}

export default PopupModal
