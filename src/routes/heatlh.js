module.exports = [{
  method: 'GET',
  path: '/health',
  handler: function (request, h) {
    request.log('info', 'Server is healthy!');
    return h.response('OK!').code(200);
  }
}];
