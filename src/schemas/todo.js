const Joi = require('@hapi/joi');
const statusTypes = require('../constants/statusTypes');

const idSchema = Joi.string().guid().required();
module.exports = {
  getTodoParamsSchema: {
    id: idSchema,
  },
  createTodoPayloadSchema: {
    title: Joi.string().required(),
    description: Joi.string().required(),
  },
  updateTodoPayloadSchema: {
    status: Joi.string().valid(...Object.values(statusTypes)).required(),
  },
  updateTodoParamsSchema: {
    id: idSchema,
  },
  destroyTodoParamsSchema: {
    id: idSchema,
  },
};
