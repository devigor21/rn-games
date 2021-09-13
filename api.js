import { API_KEY } from '@env';

export const getGames = async () => {
  const response = await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      "x-rapidapi-key": `${API_KEY}`
    }
  });
  return await response.json();
};
