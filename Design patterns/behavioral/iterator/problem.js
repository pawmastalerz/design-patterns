// SUMMARY:
//
// Iterator lets us sequentially access elements of a collection without exposing the exact representation of the collection.

// PROBLEM:
//
// Let's imagine we got a list of movies from the web API response:

const movies = [
  "Saving private Ryan",
  "Killers of the Flower Moon",
  "Fight Club",
];

// Now, somewhere in the app we want to consume that response and display it to the user:
function displayMovieList(movieList) {
  for (let i = 0; i < movieList.length; i++) {
    console.log(movieList[i]);
  }
}

displayMovieList(movies);
// "Saving private Ryan"
// "Killers of the Flower Moon"
// "Fight Club"

// Although this may seem like a correct approach, and in some cases it could be, it doesn't give us any flexibility, since it will always operate only on an array, exposing the internal representation of the collection.
// If the API response changes, we need to also change the way we iterate over that response.
