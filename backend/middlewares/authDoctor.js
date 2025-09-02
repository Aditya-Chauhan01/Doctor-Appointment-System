import jwt from "jsonwebtoken"

//doctor authentication middleware
const authDoctor = async (req, res, next) => {
    try {
        
        const {dtoken} = req.headers
        if(!dtoken){
            return res.json({success:false, message:'Not Authorized Login Again'})
        }
        const token_decode = jwt.verify(dtoken, process.env.JWT_SECRET)
        // req.body.userId = token_decode.id   // not good practice
        // Best practice is to extract the user ID from the verified token and attach it to req (not req.body). it is the secure and scalable
        req.docId = token_decode.id
        next()

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export default authDoctor