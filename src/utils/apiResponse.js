export function ok(res, data, status = 200) {
  return res.status(status).json({ success: true, data, error: null });
}

export function fail(res, message, status = 400) {
  return res.status(status).json({ success: false, data: null, error: { message } });
}
// This file defines two helper functions, `ok` and `fail`, for sending standardized JSON responses from the API. The `ok` function is used for successful responses, while the `fail` function is used for error responses. Both functions include a consistent structure for the response body, making it easier for clients to handle responses from the API.