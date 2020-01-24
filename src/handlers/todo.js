let todos = require('../../resources/todo.json');
const todoService = require('../services/todo');

const getTodos = (request, h) => {
  return h.response(todos).code(200);
};

const getTodo = (request, h) => {
  const todo = todoService.getById(todos, request.params.id);
  return h.response(todo).code(200);
};

const createTodo = (request, h) => {
  const newTodo = request.payload.data;
  todos = todoService.create(todos, newTodo);
  return h.response(newTodo).code(201);
};

const updateTodo = (request, h) => {
  todos = todoService.update(todos, request.params.id, request.payload.status);
  return h.response(todos).code(200);
};

const destroyTodo = (request, h) => {
  todos = todoService.destroy(todos, request.params.id);
  return h.response(todos).code(200);
};

module.exports = {
  getTodo,
  getTodos,
  createTodo,
  updateTodo,
  destroyTodo,
};
