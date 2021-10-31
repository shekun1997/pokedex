import { useState, useEffect } from 'react'

const usePokemonList = (url) => {
    const [data, setData] = useState()
    const [next, setNext] = useState()
    const [previous, setPrevious] = useState()
    const [count, setCount] = useState()

    useEffect(() => {
        fetch(url)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setData(data.results)
                setNext(data.next)
                setPrevious(data.previous)
                setCount(data.count)
            })
    }, [url])

    return { data, next, previous, count }
}

export default usePokemonList;