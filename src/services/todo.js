const uuidv4 = require('uuid/v4');
const statusTypes = require('../constants/statusTypes');

const getById = (todos, id) => {
  const todo = todos.find((todo) => todo.id === id);
  return todo;
};

const create = (todos, newTodo) => {
  const autoGeneratedId = uuidv4();
  return [
    ...todos, {
      ...newTodo,
      id: autoGeneratedId,
      status: statusTypes.ACTIVE,
    }];
};

const update = (todos, id, status) => {
  const todoIndex = todos.findIndex((todo) => todo.id === id);
  const updatedTodos = todos.map((todo, index) => {
    if (index === todoIndex) {
      return {...todo, status};
    }
    return todo;
  });
  return updatedTodos;
};

const destroy = (todos, id) => {
  const filteredTodos = todos.filter((todo) => todo.id !== id);
  return filteredTodos;
};


module.exports = {
  getById,
  create,
  update,
  destroy,
};
