import { Modal } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import FavoritePokemonContainer from './FavoritePokemonContainer'
import { ModalContainer } from '../Item.style'

const PopupModal = (props) => {
    const [data, setData] = useState();

    useEffect(() => {
      setData(JSON.parse(localStorage.getItem("favorite")));
    }, [props.show]);
    
    useEffect(() => {
      if (data && data !== JSON.parse(localStorage.getItem("favorite"))) {
        localStorage.setItem("favorite", JSON.stringify(data));
      }
    }, [data]);
    
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
                            <FavoritePokemonContainer 
                            pokemonurl={pokemonurl}
                            onDelete={() =>
                                setData((prev) => prev.filter((item) => item !== pokemonurl))
                            }/>
                        )):
                        <p>Empty</p>
                    }
                </Modal.Body>
            </ModalContainer>
        </div>
    )
}

export default PopupModal
