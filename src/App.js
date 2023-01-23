import { useState, useEffect } from 'react'
import './App.css'
import { getAllPokemon, getPokemon } from './utils/pokemon'

function App() {
  const initialURL = 'https://pokeapi.co/api/v2/pokemon'

  const [loading, setLoading] = useState(true)

  const [pokemonData, setPokemonData] = useState([])

  useEffect(() => {
    const fetchPokemonData = async () => {
      let res = await getAllPokemon(initialURL)
      // 各pokemonの詳細情報を取得
      loadPokemon(res.results)
      setLoading(false)
    }
    fetchPokemonData()
  }, [])

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url)
        return pokemonRecord
      }),
    )
    setPokemonData(_pokemonData)
  }

  return (
    <div className="App">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="pokemonCardContainer">
            {pokemonData.map((pokemon, i) => {
              return <div>ポケモン</div>
            })}
          </div>
        </>
      )}
    </div>
  )
}

export default App
