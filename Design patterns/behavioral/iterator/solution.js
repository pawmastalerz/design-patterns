// SOLUTION
//
// Let's create a class that will handle iteration over a collection:

class Iterator {
  constructor(collection) {
    this.collection = collection;
    this.index = 0;
  }

  hasNext() {
    return this.index < this.collection.length;
  }
  next() {
    return this.hasNext() ? this.collection[this.index++] : null;
  }
}

// Now, let's define a MoviesCollection class that will represent the way we display the movies to the user:
class MoviesCollection {
  constructor(movies) {
    this.movies = movies;
    this.iterator = new Iterator(movies);
  }

  displayMovieList() {
    while (this.iterator.hasNext()) {
      console.log(`Movie title: ${this.iterator.next()}`);
    }
  }
}

// If the API response stays the same, we have a clear way to iterate over them:
const movies = [
  "Saving private Ryan",
  "Killers of the Flower Moon",
  "Fight Club",
];
const moviesCollection = new MoviesCollection(movies);
moviesCollection.displayMovieList();
// Movie title: Saving private Ryan
// Movie title: Killers of the Flower Moon
// Movie title: Fight Club

// Hovever, if the API response changes to an array of objects we can modify the way we iterate over the response by either:
// - creating a new MoviesObjectCollection class and creating a new instance of it
// - changing the implementation of displayMovieList method in MoviesCollection class
// - compose the MoviesCollection class and make it accept an object-specific iterator in the constructor

// Let's go for the first approach:
class MoviesObjectCollection {
  constructor(movies) {
    this.movies = movies;
    this.iterator = new Iterator(movies);
  }

  displayMovieList() {
    while (this.iterator.hasNext()) {
      console.log(`Movie title: ${this.iterator.next().title}`);
    }
  }
}

const newMovies = [
  { title: "Saving private Ryan", id: 1 },
  { title: "Killers of the Flower Moon", id: 2 },
  { title: "Fight Club", id: 3 },
];
const moviesObjectCollection = new MoviesObjectCollection(newMovies);
moviesObjectCollection.displayMovieList();
// Movie title: Saving private Ryan
// Movie title: Killers of the Flower Moon
// Movie title: Fight Club
