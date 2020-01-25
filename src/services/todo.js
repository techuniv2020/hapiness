const uuidv4 = require('uuid/v4');
const jsonHelper = require('../utils/jsonFileHelper');
const statusTypes = require('../constants/statusTypes');

const todoJsonPath = './models/todos.json';

const getAll = () => jsonHelper.readFromJsonFile(todoJsonPath);

const getById = async (id) => {
  const todos = await jsonHelper.readFromJsonFile(todoJsonPath);
  const todo = todos.find((todo) => todo.id === id);
  return todo;
};

const create = async (newTodo) => {
  const autoGeneratedId = uuidv4();
  const todos = await jsonHelper.readFromJsonFile(todoJsonPath);
  const newTodos = [
    ...todos, {
      ...newTodo,
      id: autoGeneratedId,
      status: statusTypes.ACTIVE,
    }];
  await jsonHelper.writeToJsonFile(todoJsonPath, newTodos);
};

const update = async (id, status) => {
  const todos = await jsonHelper.readFromJsonFile(todoJsonPath);
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  const updatedTodos = todos.map((todo, index) => {
    if (index === todoIndex) {
      return {...todo, status};
    }
    return todo;
  });
  await jsonHelper.writeToJsonFile(todoJsonPath, updatedTodos);
  return updatedTodos;
};

const destroy = async (id) => {
  const todos = await jsonHelper.readFromJsonFile(todoJsonPath);
  const filteredTodos = todos.filter((todo) => todo.id !== id);
  jsonHelper.writeToJsonFile(todoJsonPath, filteredTodos);
};


module.exports = {
  getAll,
  getById,
  create,
  update,
  destroy,
};
