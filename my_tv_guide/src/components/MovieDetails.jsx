import React from 'react'
import { useParams } from 'react-router-dom'

export const MovieDetails = () => {
  const {movie} = useParams();
  return (
    <div>Details {movie}</div>
  )
}
