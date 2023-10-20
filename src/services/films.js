const URL = 'https://api.themoviedb.org/3/tv/top_rated?page='
const API = import.meta.env.VITE_API_KEY
export const film = () => {
  const PAGE = Math.floor(Math.random() * 5)
  return fetch(URL + PAGE.toString(), {
    headers: {
      Authorization: `Bearer ${API}`,
      accept: 'application/json'

    }
  }).then(res => res.json())
    .then(data => {
      return data.results
    })
}
