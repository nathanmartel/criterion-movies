const { getDirector, getFilm } = require('../db/data-helpers');
const Director = require('../lib/models/Director');

const request = require('supertest');
const app = require('../lib/app');

describe('director routes', () => {
  it('creates a director', async() => {
    return request(app)
      .post('/api/v1/directors')
      .send({
        name: 'test name',
        country: 'test country'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'test name',
          country: 'test country',
          __v: 0
        });
      });
  });

  it('gets a director by id', async() => {
    const director = await getDirector();

    return request(app)
      .get(`/api/v1/directors/${director._id}`)
      .then(res => {
        expect(res.body).toEqual({
          ...director,
        });
      });
  });

  // it('updates a director by id', async() => {
  //   const director = await getDirector();

  //   return request(app)
  //     .patch(`/api/v1/directors/${director._id}`)
  //     .send({ name: 'new test name' })
  //     .then(res => {
  //       expect(res.body).toEqual({
  //         ...director,
  //         name: 'new test name'
  //       });
  //     });
  // });

  it('deletes a director by id', async() => {
    const director = await getDirector();

    return request(app)
      .delete(`/api/v1/directors/${director._id}`)
      .then(res => {
        expect(res.body).toEqual(director);
      });
  });

});
