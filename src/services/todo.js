const getById = (todos, id) => {
  const todo = todos.find(todo => todo.id === id);
  return todo;
};

const create = (todos, newTodo) => {
  return [...todos, newTodo];
};

const update = (todos, id, status) => {
  const todoIndex = todos.findIndex(todo => todo.id === id);
  const updatedTodos = todos.map((todo, index) => {
    if(index === todoIndex) {
      todo = {...todo, status};
      return todo;
    }
    return todo;
  });
  return updatedTodos;
};

const destroy = (todos, id) => {
  const filteredTodos = todos.filter(todo => todo.id !== id);
  return filteredTodos;
};


module.exports = {
  getById,
  create,
  update,
  destroy
};