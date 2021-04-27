'use strict';

const { server } = require('../src/server.js');
const supergoose = require('@code-fellows/supergoose');
const { it, expect } = require('@jest/globals');
// const { expect } = require('@jest/globals');
const mockRequest = supergoose(server);


describe('API SERVER', () => {

  it('should create a new item in the db', async () => {
    const response = await mockRequest.post('/signup').send({ username: 'testname', password: 'testpw' });
    expect(response.status).toBe(201);
    expect(response.body.username).toEqual('testname');
  });

  it('should verify that middleware sends a header on valid user', async () => {
    const response = await mockRequest.post('/signin').auth("testname", "testpw");
    expect(response.status).toBe(200);
    expect(response.body.username).toEqual('testname');
  });

  it('should verify that middleware does not send a head on invalid user', async () => {
    const response = await mockRequest.post('/signin').auth("invalid", "user");
    expect(response.status).toBe(403);
  });

  it('can create a new user and then sign that user in', async () => {
    const request = await mockRequest.post('/signup').send({ username: 'testname', password: 'testpw' });
    const response = await mockRequest.post('/signin').send({ username: 'testname', password: 'testpw' }).auth(request.body.username, 'testpw');
    expect(response.status).toBe(200);
  });

})