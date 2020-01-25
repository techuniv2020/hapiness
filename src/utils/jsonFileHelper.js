const fsPromise = require('promise-fs');

const readFromJsonFile = async (jsonPath) => {
  const todosJson = await fsPromise.readFile(jsonPath, {encoding: 'utf-8'});
  return JSON.parse(todosJson);
};

const writeToJsonFile = async (jsonPath, updatedJson) => {
  const jsonString = JSON.stringify(updatedJson);
  await fsPromise.writeFile(jsonPath, jsonString);
};

module.exports = {
  readFromJsonFile,
  writeToJsonFile,
};
