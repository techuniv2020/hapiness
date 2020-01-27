const {getTodos} = require('../../src/handlers/todo');
const todoService = require('../../src/services/todo');


test('todo handler with a library mock', async () => {
  const mockRequest = {};
  const mockCode = jest.fn();

  const spy = jest.spyOn(todoService, 'getAll');
  spy.mockResolvedValue(1);

  const mockH = {
    response: jest.fn(()=>({code: mockCode})),
  };
  await getTodos(mockRequest, mockH);
  expect(mockH.response).toHaveBeenCalledWith(1);
  expect(mockCode).toHaveBeenCalledWith(200);
  spy.mockRestore();
});
