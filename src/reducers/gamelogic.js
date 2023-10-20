export const initialState = {
  wordGuessed: false,
  wordTries: 0,
  showHint: false,
  hintCount: 0,
  lives: 3,
  points: 0,
  newFilm: true
}

export const gameLogic = (state, action) => {
  switch (action.type) {
    case 'FILM_GUESSED' : {
      return {
        ...state,
        wordGuessed: true,
        points: state.points + 1
      }
    }
    case 'FILM_GUESS_FAILED':{
      return {
        ...state,
        wordTries: state.wordTries + 1,
        lives: state.lives - 1
      }
    }
    case 'SHOW_HINT':{
      return {
        ...state,
        showHint: true,
        hintCount: state.hintCount + 1
      }
    }
    case 'GET_NEW_FILM':{
      return {
        ...state,
        wordGuessed: false,
        lives: 3,
        showHint: false,
        newFilm: action.payload.newFilm === undefined ? true : action.payload.newFilm

      }
    }
    case 'RESET_FILM':{
      return {
        ...state,
        newFilm: false
      }
    }
    case 'RESET_GAME':{
      return {
        ...initialState
      }
    }
  }
}
