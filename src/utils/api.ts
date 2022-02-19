import axios from 'axios'

const httpClient = axios.create({
    baseURL: "https://swapi.dev/api",
    // baseURL: "https://8d73-41-90-66-159.ngrok.io/api/v1",
    headers: {
      "Content-Type": "application/json",
      // anything else you want to add to the headers
    },
  });


export default httpClient
