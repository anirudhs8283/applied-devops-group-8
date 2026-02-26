export function ok(res, data, status = 200) {
  return res.status(status).json({ success: true, data, error: null });
}

export function fail(res, message, status = 400) {
  return res.status(status).json({ success: false, data: null, error: { message } });
}
