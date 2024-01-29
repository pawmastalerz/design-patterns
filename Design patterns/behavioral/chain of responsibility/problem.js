// SUMMARY:
//
// Chain of responsibility lets us pass a request along a chain of potential handlers.

// PROBLEM:
//
// Let's say that we're creating a streaming service, where we need to check if:
// - user is authenticated
// - user is authorized to watch specific movie and
// - the stream data is correct

class User {
  constructor(username) {
    this.username = username;
  }
}

class Movie {
  constructor(movieName) {
    this.movieName = movieName;
  }
}

// Now, to make sure that the user is authenticated, authorized and the data is correct we need to write this monstrocity:
class MoviePlayer {
  watchMovie(user, movie) {
    if (this.#isAuthenticated(user)) {
      if (this.#isAuthorized(user, movie)) {
        const stream = this.#getMovieStream(movie);
        if (this.#isStreamValid(stream)) {
          console.log(`${user.username} is watching ${movie.movieName} now.`);
        } else {
          throw new Error(`Invalid stream data for ${movie.movieName}.`);
        }
      } else {
        throw new Error(
          `${user.username} is not authorized to watch ${movie.movieName}.`
        );
      }
    } else {
      throw new Error(`${user.username} is not authenticated.`);
    }
  }

  #isAuthenticated(user) {
    console.log(`Checking if ${user.username} is authenticated...`);
    return true;
  }

  #isAuthorized(user, movie) {
    console.log(
      `Checking if ${user.username} is authorized to watch ${movie.movieName}...`
    );
    return true;
  }

  #getMovieStream(movie) {
    return { data: "STREAM", movieName: movie.movieName, ok: true };
  }

  #isStreamValid(stream) {
    return stream.ok;
  }
}

const user = new User("Pawel");
const movie = new Movie("Saving private Ryan");

const moviePlayer = new MoviePlayer();
moviePlayer.watchMovie(user, movie);
// Checking if Pawel is authenticated...
// Checking if Pawel is authorized to watch Saving private Ryan...
// Pawel is watching Saving private Ryan now.
