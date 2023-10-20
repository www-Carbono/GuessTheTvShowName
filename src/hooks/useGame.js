import { gameLogic, initialState } from '../reducers/gamelogic'
import { useRef, useReducer } from 'react'

export const useGame = () => {
  const [state, dispatch] = useReducer(gameLogic, initialState)
  const wordGuess = useRef()

  const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log(wordGuess)
    wordGuess.current.value = ''
  }

  const onCheckTheGuessHandler = (word) => {
    const wordSolution = word.join('')
    const triedWord = wordGuess.current.value

    if (state.lives === 0) return
    if (triedWord.toLowerCase() === wordSolution.toLowerCase()) {
      dispatch({ type: 'FILM_GUESSED' })
      dispatch({ type: 'RESET_FILM' })
    } else {
      dispatch({ type: 'FILM_GUESS_FAILED' })
      dispatch({ type: 'RESET_FILM' })
    }
  }

  const onHintButton = () => {
    dispatch({ type: 'SHOW_HINT' })
  }

  const GetNewWord = () => {
    dispatch({ type: 'GET_NEW_FILM', payload: { newFilm: true } })
  }

  const resetGame = () => {
    dispatch({ type: 'RESET_GAME' })
  }

  return { onSubmitHandler, onCheckTheGuessHandler, onHintButton, GetNewWord, resetGame, state, wordGuess }
}
