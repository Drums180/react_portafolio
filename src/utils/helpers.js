// Axios is a popular NPM package used for preforming API requests
import axios from "axios";

export function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Using axios, we create a search method that is specific to our use case and export it at the bottom
const search = (query) =>
  axios.get(
    `https://api.giphy.com/v1/gifs/search?q=${query}$&api_key=zGTBO65XtIkTWFiBcgVCxJX7x8FveHfA&limit=20`
  );

// Export an object with a "search" method that searches the Giphy API for the passed query
export default search;
