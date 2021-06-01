const baseUrl = 'https://api.nytimes.com/svc/topstories/v2/'

export const getNews = (typeOfNews) => {
  return fetch(`${baseUrl}${typeOfNews}.json?api-key=A2uny6xR8UzkE7eghxaX07VHE0sbsaMC`)
  .then(response => {
    if(response.ok) {
     return response.json()
    }
    throw new Error("Something went wrong.")
  })


//api.nytimes.com/svc/topstories/v2/arts.json?api-key=yourkey
//api.nytimes.com/svc/topstories/v2/home.json?api-key=yourkey
//api.nytimes.com/svc/topstories/v2/science.json?api-key=yourkey
//api.nytimes.com/svc/topstories/v2/us.json?api-key=yourkey
//api.nytimes.com/svc/topstories/v2/world.json?api-key=yourkey
// The possible section value are: arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, t-magazine, travel, upshot, us, and world.
