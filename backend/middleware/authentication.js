const jwt = require("jsonwebtoken")

const authentication=(req,res,next)=>{


const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer "))
    return res.status(401).json({ message: "Forbidden" });

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.SECRET,(err,result)=>{
        if(err){
            res.status(403).json({
              success:false,
              message:"the token invalid"  
            })

        }

        else{
            req.token=result
        }
         next();
    });
   
   
  } catch (err) {
    res.status(403).json({ message: "Unauthorized" });
  }
};

