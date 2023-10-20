export const FilmWord = ({ secretFilm, filmSolution, guessed }) => {
  return (
    <>
      {filmSolution && <div>{filmSolution}</div>}
      <div className='flex flex-row bg-white m-[10%] justify-center flex-wrap rounded-xl p-1 border-2 border-b-8 border-black'>
        {
        !guessed
          ? secretFilm.map((film, index) => {
            return (
              <p key={index} className={film === ' ' ? 'p-2' : 'p-1'}>{film}</p>
            )
          })
          : filmSolution.map((film, index) => {
            return (
              <p key={index} className={film === ' ' ? 'p-2' : 'p-1'}>{film}</p>
            )
          })
      }
      </div>
    </>
  )
}
