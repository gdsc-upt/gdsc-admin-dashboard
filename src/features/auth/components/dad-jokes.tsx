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

const dadJokesApiBackup = axios.create({
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "52f1fba95dmshc06c3b599bf37efp1d9981jsnb21e19ee12eb",
    "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
  },
});

const dadJokesApiBackupBackup = axios.create({
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ccf720492cmshc166d1e94bba814p13f1aajsn6796c301c60f",
    "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
  },
});

export async function getDadJoke() {
  let response;
  try {
    response = await dadJokesApi.get("https://dad-jokes.p.rapidapi.com/random/joke/");
  } catch (e) {
    try {
      response = await dadJokesApiBackup.get("https://dad-jokes.p.rapidapi.com/random/joke/");
    } catch (ex) {
      response = await dadJokesApiBackupBackup.get("https://dad-jokes.p.rapidapi.com/random/joke/");
    }
  }
  return response.data.body[0];
}
