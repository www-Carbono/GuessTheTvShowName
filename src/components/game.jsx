import { useFilms } from '../hooks/useFilms'

import { PopupsInsta, PopupsButton } from '../components/popup'
import { FilmWord } from '../components/films'

import { useGame } from '../hooks/useGame'

import 'reactjs-popup/dist/index.css'

export const Game = () => {
  const { onSubmitHandler, onCheckTheGuessHandler, onHintButton, GetNewWord, resetGame, state, wordGuess } = useGame()
  const { secretFilm, filmSolution, hint } = useFilms(state.newFilm)

  return (
    <>
      <PopupsInsta state={state} resetGame={resetGame} GetNewWord={GetNewWord} />
      <div className='flex justify-center gap-5 mt-5'>
        <p className='p-2 px-10 bg-[#F95A2C] border-2 border-b-8 border-black rounded-full flex flex-col text-center text-white'><span className='font-black'>Lives</span>{state.lives}</p>
        <p className='p-2 px-10 bg-[#00C6AE] border-2 border-b-8 border-black rounded-full flex flex-col text-center text-white'><span className='font-black'>Points</span>{state.points}</p>
      </div>

      <form onSubmit={onSubmitHandler} className='flex flex-col justify-center mt-5 '>

        <div className='flex flex-col justify-center mx-[15%] md:mx-[20%] lg:mx-[25%] xl:mx-[30%]'>
          <input ref={wordGuess} type='text' placeholder='Insert the film' className='py-2 border-2 border-b-8 border-black rounded-xl' />

          <div className='flex flex-col justify-center gap-2 sm:flex-row'>
            <button onClick={() => onCheckTheGuessHandler(filmSolution)} className='py-2 border-2 border-b-8 border-black rounded-xl bg-[#f77bae] mt-5 text-white mx-[20%] sm:mx-[0%]'>Check The Guess</button>
            <button onClick={onHintButton} disabled={state.showHint} className='py-1 border-2 border-b-8 border-black rounded-xl bg-[#1947E5] mt-5 text-white p-10 mx-[20%]sm:mx-[0%]'>Hint</button>

          </div>

        </div>
      </form>

      <div className='md:mx-[20%] lg:mx-[25%] xl:mx-[30%]'>
        <FilmWord secretFilm={secretFilm} filmSolution={filmSolution} guessed={state.wordGuessed} />

        <p className='p-2 px-10 bg-[#F95A2C] border-2 border-b-8 border-black rounded-xl flex flex-col text-center text-white mx-[20%] mb-5'><span className='font-black'>Hint Count</span>{state.hintCount}</p>
        <p className={state.showHint ? 'block border-2 border-b-8 border-black rounded-xl bg-white mx-[5%] p-2' : 'hidden'}>{hint}</p>

        <PopupsButton state={state} />

      </div>

    </>
  )
}
