import React from 'react'
import './Card.css'

export const Card = ({ pokemon }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={pokemon.sprites.front_default} alt={pokemon.name}></img>
      </div>
      <h3 className="cardName">{pokemon.name}</h3>
      <div className="cardTypes">
        <div>タイプ</div>
        {pokemon.types.map((type) => {
          return (
            <div key={type.type.name}>
              <span className="typeName">{type.type.name}</span>
            </div>
          )
        })}
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <p className="title">重さ : {pokemon.weight}</p>
        </div>
        <div className="cardData">
          <p className="title">高さ : {pokemon.height}</p>
        </div>
        <div className="cardData">
          {pokemon.abilities.map((ability, i) => {
            return <p key={i}>アビリティ : {ability.ability.name}</p>
          })}
        </div>
      </div>
    </div>
  )
}
