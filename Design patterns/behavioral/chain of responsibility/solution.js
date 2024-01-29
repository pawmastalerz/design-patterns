// SOLUTION
//
// Let's create a chain of responsibility and clear the code:

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

// Now, a base class to process generic requests:
class RequestHandler {
  constructor(successor = null) {
    this.successor = successor;
  }

  handleRequest(request) {
    if (this.successor) {
      return this.successor.handleRequest(request);
    } else {
      throw new Error("Unsupported request type");
    }
  }
}

class AuthenticationHandler extends RequestHandler {
  constructor(successor = null) {
    super(successor);
    this.successor = successor;
  }

  // For simplicity, let's make all handleRequest methods accept user and movie
  handleRequest(user, movie) {
    if (!this.#isAuthenticated(user)) {
      throw new Error(`${user.username} is not authenticated.`);
    }
    if (this.successor) this.successor.handleRequest(user, movie);
  }

  #isAuthenticated(user) {
    console.log(`Checking if ${user.username} is authenticated...`);
    return true;
  }
}

class AuthorizationHandler extends RequestHandler {
  constructor(successor = null) {
    super(successor);
    this.successor = successor;
  }

  handleRequest(user, movie) {
    if (!this.#isAuthorized(user, movie)) {
      throw new Error(
        `${user.username} is not authorized to watch ${movie.movieName}.`
      );
    }
    if (this.successor) this.successor.handleRequest(user, movie);
  }

  #isAuthorized(user, movie) {
    console.log(
      `Checking if ${user.username} is authorized to watch ${movie.movieName}...`
    );
    return true;
  }
}

class StreamHandler extends RequestHandler {
  constructor(successor = null) {
    super(successor);
    this.successor = successor;
  }

  handleRequest(user, movie) {
    const stream = this.#getMovieStream(movie);

    if (this.#isStreamValid(stream)) {
      console.log(`${user.username} is watching ${movie.movieName} now.`);
    } else {
      throw new Error(`Invalid stream data for ${movie.movieName}.`);
    }

    if (this.successor) this.successor.handleRequest(user, movie);
  }

  #getMovieStream(movie) {
    return { data: "STREAM", movieName: movie.movieName, ok: true };
  }

  #isStreamValid(stream) {
    return stream.ok;
  }
}

class MoviePlayer {
  handlerChain = new AuthenticationHandler(
    new AuthorizationHandler(new StreamHandler())
  );

  watchMovie(user, movie) {
    this.handlerChain.handleRequest(user, movie);
  }
}

const user = new User("Pawel");
const movie = new Movie("Saving private Ryan");

const moviePlayer = new MoviePlayer();
moviePlayer.watchMovie(user, movie);
// Checking if Pawel is authenticated...
// Checking if Pawel is authorized to watch Saving private Ryan...
// Pawel is watching Saving private Ryan now.

// Although our code is significantly bigger, it's also way more clear, super easy to read and debug.
// Every handler (and Movie Player) has it's own responsibility, Movie Player is open to extension, but closed for modification.
