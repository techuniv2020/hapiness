const todos = require('../../resources/todo.json');

module.exports = [{
  method: 'GET',
  path: '/todo',
  handler: function (request, h) {
    const { data } = todos;
    return h.response(data).code(200);
  }
}];
