import { PopupModel, PopupModelOpen } from '../utils/popup'

export const PopupsInsta = ({ state, resetGame, GetNewWord }) => {
  return (
    <>
      <PopupModelOpen ModalClick={state.lives === 0} ModalTitle='¡You Lost!'>You Lost all your lives, Try Again!
        <div>
          <p>Right Guessed: {state.points}</p>
          <p>Wrong Guessed : {state.wordTries}</p>
          <p>Hint Used: {state.hintCount}</p>
        </div>
        <button onClick={() => resetGame()} className='p-2 px-10 bg-[#F95A2C] border-2 border-b-8 border-black rounded-xl  text-white my-5'> Play Again</button>
      </PopupModelOpen>
      <PopupModelOpen ModalClick={state.wordGuessed} ModalTitle='¡You Won!'><p>You guessed the word, move on to the next word!</p><button onClick={() => GetNewWord()} className='p-2 px-10 bg-[#00C6AE] border-2 border-b-8 border-black rounded-xl  text-white my-5'> Next Word</button> </PopupModelOpen>

    </>

  )
}

export const PopupsButton = ({ state }) => {
  return (
    <div className='p-2 px-10 bg-[#00C6AE] border-2 border-b-8 border-black rounded-xl flex flex-col text-center text-white mx-[20%] mt-10'>
      <PopupModel ModalClick='Stadistics' ModalTitle='Stadistics'>
        <p>Right Guessed: {state.points}</p>
        <p>Wrong Guessed : {state.wordTries}</p>
        <p>Hint Used: {state.hintCount}</p>
      </PopupModel>
    </div>
  )
}
