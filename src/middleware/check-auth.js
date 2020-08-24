const jwt=require("jsonwebtoken")
module.exports=(req,res,next)=>{
  try{
    let cookies = parseCookies(req);
    let token;
    if(req.headers.authorization!=null){
      token=req.headers.authorization.split(" ")[1];
    }
    else{
      token=cookies.token;
    }
    const decoded=jwt.verify(token,process.env.JWT_KEY||"secret");
    req.userData=decoded;
    next();

  }catch(error){
    console.log(error);
    return res.redirect("/login")
  }
}
function parseCookies (request) {
  let list = {},
      rc = request.headers.cookie;

  rc && rc.split(';').forEach(function( cookie ) {
    let parts = cookie.split('=');
    list[parts.shift().trim()] = decodeURI(parts.join('='));
  });

  return list;
}


