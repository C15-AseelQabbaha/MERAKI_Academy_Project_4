function authorizeRole(role) {
  return (req, res, next) => {
    if (!req.token.role.permissions.includes(string))
      return res.status(403).json({ message:  `Unauthorized` });
    next();
  };
}

module.exports={authorizeRole}