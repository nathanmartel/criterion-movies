const { getFilm, getFilms, getDirectors } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');
const Film = require('../lib/models/Film');
const Director = require('../lib/models/Director');

describe('film routes', () => {
  it('creates a film', () => {
    return request(app)
      .post('/api/v1/films')
      .send({
        title: 'test title',
        director: 'test director',
        duration: 'test duration',
        year: 1234
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          title: 'test title',
          director: 'test director',
          duration: 'test duration',
          year: 1234,
          __v: 0
        });
      });
  });

  it('gets a film by id', async() => {
    const film = await getFilm();

    return request(app)
      .get(`/api/v1/films/${film._id}`)
      .then(res => {
        expect(res.body).toEqual({
          ...film
        });
      });
  });

  it('gets all films', async() => {
    const films = await getFilms();

    return request(app)
      .get('/api/v1/films')
      .then(res => {
        expect(res.body).toEqual(films);
      });
  });

  // it('updates a film by id', async() => {
  //   const film = await getFilm();

  //   return request(app)
  //     .patch(`/api/v1/films/${film._id}`)
  //     .send({ title: '1234 test' })
  //     .then(res => {
  //       expect(res.body).toEqual({
  //         ...film,
  //         title: '1234 test'
  //       });
  //     });
  // });

  it('deletes a film by id', async() => {
    const film = await getFilm();
    
    return request(app)
      .delete(`/api/v1/films/${film._id}`)
      .then(res => {
        expect(res.body).toEqual(film);
      });
  });
});
