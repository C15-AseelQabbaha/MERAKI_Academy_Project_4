function authorization(role) {
  return (req, res, next) => {
    if (!req.token.role.permissions.includes(string))
      return res.status(403).json({ message: `Unauthorized` });
    next();
  };
}


// const allowedRoles = (req, res, next) => {
//   try {
//     if (!req.token || req.token.role) {
//       return res.status(403).json({
//         success: false,
//         message: "Access failed"

//       })
//     }

// const userRole = req.token.role

// if (!allowedRoles.includes(userRole)) {
//   return res.status(403).json({
//     success: false,
//     message: "insufficient permission"

//   })
// }
// next()

// } catch (err) {
//   res.status(500).json({
//     success: false,
//     message: "Athorization Error",
//     error: err.message
//   })

//   }




// }




module.exports = authorization 