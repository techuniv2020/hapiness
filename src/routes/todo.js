const todoHandler = require('../handlers/todo');
const todoSchema = require('../schemas/todo');

module.exports = [{
  method: 'GET',
  path: '/todo',
  handler: todoHandler.getTodos,
  options: {
    description: 'Get todos',
  },
}, {
  method: 'GET',
  path: '/todo/{id}',
  handler: todoHandler.getTodo,
  options: {
    description: 'Get todo by id',
    tags: ['api'],
    validate: {
      params: todoSchema.getTodoParamsSchema,
    },
  },
}, {
  method: 'POST',
  path: '/todo',
  handler: todoHandler.createTodo,
  options: {
    description: 'Create todo',
    tags: ['api'],
    validate: {
      payload: todoSchema.createTodoPayloadSchema,
    },
  },
}, {
  method: 'PUT',
  path: '/todo/{id}',
  handler: todoHandler.updateTodo,
  options: {
    description: 'Update todo by id',
    tags: ['api'],
    validate: {
      payload: todoSchema.updateTodoPayloadSchema,
      params: todoSchema.updateTodoParamsSchema,
    },
  },
}, {
  method: 'DELETE',
  path: '/todo/{id}',
  handler: todoHandler.destroyTodo,
  options: {
    description: 'Delete todo status by id',
    tags: ['api'],
    validate: {
      params: todoSchema.destroyTodoParamsSchema,
    },
  },
}];
