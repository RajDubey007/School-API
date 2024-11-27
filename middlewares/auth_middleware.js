import jwt from "jsonwebtoken";

const veryfayToken = (roles) => {

    return (req, res, next) => {
        
        try {
            const authHeader = req.header("authorization");

            // Check if authorization header exists
            if (!authHeader) {
                res.json({
                    status: 401,
                    message: "Authorization header is missing",
                });
            }

            const tokenData = authHeader.split(" ")[1];
            console.log("tokenData >>>", tokenData);

            const decoded = jwt.verify(tokenData, process.env.JWT_SECRET || "#secret");
            console.log("token >>>", decoded);

            if(roles.includes(decoded.role)) {
                res.json({
                    status : 200,
                    message: "you are Authorized",
                    data: decoded,
                });
                next();
            }
            else {
                res.json({
                    status : 404,
                    message: "you are Unauthorized"
                });
            }
            
        } catch (error) {
            console.log(error);
            
            res.json({
                status : 404,
                message: "Please valid token enter"
            });
        }
    }
}


export default veryfayToken;