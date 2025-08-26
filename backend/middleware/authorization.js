function authorization(role) {
  return (req, res, next) => {
    if (!req.token.role.permissions.includes(role))
      return res.status(403).json({ message: `Unauthorized` });
    next();
  };
}






module.exports = authorization 