import { useState, useEffect } from 'react'

const useFavoriteList = (keyname) => {
    const [data, setData] = useState()

    useEffect(() => {
        setData(JSON.parse(localStorage.getItem('favorite')))
    }, [keyname])

    return { data }
}

export default useFavoriteList;
