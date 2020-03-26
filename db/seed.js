const criterionDirectors = ('./criterionMovies-directors.json');
const criterionFilms = ('./criterionMovies-films.json');
const Director = ('../lib/models/Director');
const Film = ('../lib/models/Director');

module.exports = async() => {
  criterionDirectors.forEach(director => {
    Director.create({
      name: director.name,
      country: director.country
    });
  });
  criterionFilms.forEach(film => {
    Film.create({
      title: film.title,
      directory: film.director,
      duration: film.duration,
      year: film.year,
    });
  });
};

// Or invert this and do the create via .map?
