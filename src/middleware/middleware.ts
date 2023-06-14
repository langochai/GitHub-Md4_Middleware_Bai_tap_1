export const addUser = (req,res,next)=>{
    const {username,password} = req.body;
    req.user = {username,password};
    next();
}

// export default addUser