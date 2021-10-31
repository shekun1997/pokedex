import { useState } from 'react'
import { GrFavorite } from "react-icons/gr";
import FavoriteModal from './FavoriteModal'
import { FavButton } from '../Item.style'

const FavoriteButton = () => {
    const [modalShow, setModalShow] = useState(false)
    
    return (
        <div>
            <FavButton onClick={() => setModalShow(true)}><GrFavorite /></FavButton>
            <FavoriteModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default FavoriteButton
