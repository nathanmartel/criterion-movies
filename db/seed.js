const criterionDirectors = require('./criterionMovies-directors-test.json');
const criterionFilms = require('./criterionMovies-films-test.json');
const Director = require('../lib/models/Director');
const Film = require('../lib/models/Film');

module.exports = async() => {
  await Director.create(criterionDirectors.map(director => ({
    name: director.name,
    country: director.country
  })));
  
  await Film.create(criterionFilms.map(film => ({
    title: film.title,
    director: film.director,
    duration: film.duration,
    year: film.year
  })));
};
