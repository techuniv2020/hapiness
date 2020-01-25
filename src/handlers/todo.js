const todoService = require('../services/todo');

const getTodos = async (request, h) => {
  const todos = await todoService.getAll();
  return h.response(todos).code(200);
};

const getTodo = async (request, h) => {
  const todo = await todoService.getById(request.params.id);
  return h.response(todo).code(200);
};

const createTodo = async (request, h) => {
  const newTodo = request.payload;
  await todoService.create(newTodo);
  return h.response(newTodo).code(201);
};

const updateTodo = async (request, h) => {
  const {params: {id}, payload: {status}} = request;
  const todos = await todoService.update(id, status);
  return h.response(todos).code(200);
};

const destroyTodo = async (request, h) => {
  const {params: {id}} = request;
  const todos = await todoService.destroy(id);
  return h.response(todos).code(200);
};

module.exports = {
  getTodo,
  getTodos,
  createTodo,
  updateTodo,
  destroyTodo,
};
