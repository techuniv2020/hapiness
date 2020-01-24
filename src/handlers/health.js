const healthHandler = (request, h) => {
  return h
      .response({
        status: 'OK!',
      })
      .code(200);
};

module.exports = {
  healthHandler,
};
