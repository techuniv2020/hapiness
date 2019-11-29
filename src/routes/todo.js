const todoHandler = require('../handlers/todo');

module.exports = [{
  method: 'GET',
  path: '/todo',
  handler:  todoHandler.getTodos
}, {
  method: 'GET',
  path: '/todo/{id}',
  handler: todoHandler.getTodo
}, {
  method: 'POST',
  path: '/todo',
  handler: todoHandler.createTodo
}, {
  method: 'PUT',
  path: '/todo/{id}',
  handler: todoHandler.updateTodo
}, {
  method: 'DELETE',
  path: '/todo/{id}',
  handler: todoHandler.destroyTodo
}];
