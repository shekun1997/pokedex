import { useState, useEffect } from 'react'

const usePokemonDetail = (url) => {
    const [pokemonimg, setPokemonimg] = useState()
    const [abilities, setAbilities] = useState()
    const [height, setHeight] = useState()
    const [weight, setWeight] = useState()
    const [name, setName] = useState()

    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setPokemonimg(data.sprites.front_default)
                setAbilities(data.abilities)
                setHeight(data.height)
                setWeight(data.weight)
                setName(data.name)
            })
    }, [url])

    return { pokemonimg, abilities, height, weight, name }
}

export default usePokemonDetail