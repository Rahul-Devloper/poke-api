import {React, useState} from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import './Pokemon.css'
import { useParams } from 'react-router-dom';

const Pokemon = () => {

  const {pokemonId} = useParams()


  
  return (
    <div>
      <h1>{`Welcome to Pokemon ${pokemonId}`}</h1>
    </div>
  )
}

export default Pokemon
