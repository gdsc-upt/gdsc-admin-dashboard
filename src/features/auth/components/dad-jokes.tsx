import axios from "axios";

export interface JokeModel {
  setup: string;
  punchline: string;
}

const dadJokesApi = axios.create({
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e1168d9089msh26cfbf37468c505p12c33ejsn327f1d1dd66f",
    "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
  },
});

export function getDadJoke() {
  return dadJokesApi
    .get<{ body: JokeModel[] }>("https://dad-jokes.p.rapidapi.com/random/joke")
    .then(response => response.data.body[0]);
}
