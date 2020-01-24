const {healthHandler} = require('../../src/handlers/health');

test('health handler with js mock', () => {
  const mockRequest = {};
  const mockH = {
    response: (res) => ({
      code: (code) => ({...res, code}),
    }),
  };
  const output = healthHandler(mockRequest, mockH);
  expect(output.code).toEqual(200);
  expect(output.status).toEqual('OK!');
});

test('health handler with a library mock', () => {
  const mockRequest = {};
  const mockCode = jest.fn();
  const mockH = {
    response: jest.fn(()=>({code: mockCode})),
  };
  healthHandler(mockRequest, mockH);
  expect(mockH.response).toHaveBeenCalledWith({status: 'OK!'});
  expect(mockCode).toHaveBeenCalledWith(200);
});
