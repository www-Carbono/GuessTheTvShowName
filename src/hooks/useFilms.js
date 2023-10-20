import { useEffect, useReducer } from 'react'
import { film } from '../services/films'

import { filmWordLogic, initialState } from '../reducers/films'
export function useFilms (newFilm) {
  const [state, dispatch] = useReducer(filmWordLogic, initialState)

  const { randomFilm, filmSolution, hint, secretFilm } = state

  useEffect(() => {
    if (newFilm) {
      film().then((movies) => {
        const randomIndex = Math.floor(Math.random() * movies.length)
        dispatch({ type: 'FETCH_FILM', payload: { randomFilm: movies[randomIndex] } })
      })
    }
  }, [newFilm])

  useEffect(() => {
    if (randomFilm) {
      dispatch({ type: 'CONFIGURE_FILM' })
    }
  }, [randomFilm])

  useEffect(() => {
    dispatch({ type: 'SEND_FILM' })
  }, [filmSolution])
  return { secretFilm, filmSolution, hint }
}
