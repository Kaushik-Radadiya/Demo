// eslint-disable-next-line no-unused-vars
const { messages } = require("../constant/constant");

function responseGenerate(isError, msg = null, statusCode = null, data = null) {
  const response = {};
  response.status = !isError;
  response.message = msg || (isError ? messages.MSG_ERROR : messages.MSG_SUCCESS);
  response.status_code = statusCode || (isError ? messages.CODE_ERROR : messages.CODE_SUCCESS);
  if ((data && data.length !== 0) || data === 0) response.data = data;
  return response;
}

module.exports = { responseGenerate };
