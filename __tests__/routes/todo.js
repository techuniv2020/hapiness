'use strict';

const Lab = require('@hapi/lab');
const {expect} = require('@hapi/code');
const {afterEach, beforeEach, describe, it} = exports.lab = Lab.script();
const {setupServer} = require('../../src/server');

describe('GET /todo', () => {
  let server;

  beforeEach(async () => {
    server = await setupServer();
  });

  afterEach(async () => {
    await server.stop();
  });

  it('responds with 200', async () => {
    const response = await server.inject({
      method: 'get',
      url: '/todo',
    });
    const todos = JSON.parse(response.payload);
    expect(response.statusCode).to.equal(200);
    expect(todos.length).to.equal(3);
  });
});
