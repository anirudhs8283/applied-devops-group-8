export function allowRoles(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: "Forbidden" });
    }
    next();
  };
}
// This middleware factory function takes a list of allowed roles and returns a middleware function that checks if the authenticated user's role is in that list. If not, it responds with a 403 Forbidden error. This can be used to protect routes based on user roles.