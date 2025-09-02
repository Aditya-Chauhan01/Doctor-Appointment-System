import jwt from "jsonwebtoken"

//user authentication middleware
const authUser = async (req, res, next) => {
    try {
        
        const {token} = req.headers
        if(!token){
            return res.json({success:false, message:'Not Authorized Login Again'})
        }
        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        // req.body.userId = token_decode.id   // not good practice
        // Best practice is to extract the user ID from the verified token and attach it to req (not req.body). it is the secure and scalable
        req.userId = token_decode.id
        next()

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export default authUser