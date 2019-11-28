const todos = require('../../resources/todo.json');

module.exports = [{
  method: 'GET',
  path: '/todo',
  handler: function (request, h) {
    return h
      .response(todos) 
      .code(200);
  }
}, {
  method: 'GET',
  path: '/todo/{id}',
  handler: function (request, h) {
    const todo = todos.find(todo => todo.id === request.params.id);
    return h
      .response(todo) 
      .code(200);
  }
}, {
  method: 'POST',
  path: '/todo',
  handler: function (request, h) {
    const newTodo = request.payload.data;
    todos.push(newTodo);
    return h
      .response(newTodo) 
      .code(201);
  }
}, {
  method: 'PUT',
  path: '/todo/{id}',
  handler: function (request, h) {
    const index = todos.findIndex(todo => todo.id === request.params.id);
    todos[index].status =  request.payload.status;
    return h
      .response(todos[index]) 
      .code(200);
  }
}, {
  method: 'DELETE',
  path: '/todo/{id}',
  handler: function (request, h) {
    const index = todos.findIndex(todo => todo.id === request.params.id);
    todos.splice(index, 1);
    return h
      .response(todos) 
      .code(200);
  }
}];
