export const initialState = {
  randomFilm: null,
  filmSolution: [],
  secretFilm: [],
  hint: null
}

export const filmWordLogic = (state, action) => {
  switch (action.type) {
    case 'FETCH_FILM' : {
      return {
        ...state,
        randomFilm: action.payload.randomFilm
      }
    }
    case 'CONFIGURE_FILM' : {
      return {
        ...state,
        hint: state.randomFilm.overview,
        filmSolution: state.randomFilm.name.split('')
      }
    }

    case 'SEND_FILM' : {
      const randomIndexFinal = []
      while (randomIndexFinal.length < state.filmSolution.length / 2) {
        randomIndexFinal.push(Math.floor(Math.random() * state.filmSolution.length))
      }
      const secretFilmLocal = state.filmSolution.map((letter, index) => {
        if (/^[a-zA-Z]$/.test(letter) && !randomIndexFinal.includes(index)) {
          return '_'
        }

        return letter
      })
      return {
        ...state,
        secretFilm: secretFilmLocal
      }
    }
  }
}
