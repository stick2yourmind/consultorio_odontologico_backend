const apiSuccessResponse = (data, statusCode = 200) => {
  return {
    data,
    error: false,
    statusCode
  }
}

const apiFailedResponse = (error, statusCode = 500) => {
  return {
    error: true,
    error_details: error,
    statusCode
  }
}

module.exports = {
  apiFailedResponse,
  apiSuccessResponse
}
