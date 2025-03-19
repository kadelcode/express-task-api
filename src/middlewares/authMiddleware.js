/**
 * This code snippet defines a middleware function called `authMiddleware` that
 * is used to authenticate incoming requests using JSON Web Tokens (JWTs).
 * 
 * This middleware is commonly used to protect routes that require authentication, 
 * ensuring that only users with valid JWTs can access them.
 */

import jwt from "jsonwebtoken"; // Used for creating and verifying JWTs

/**
 * This defines a middle function that takes three (3) arguments:
 * - `req`: The request object, containing information about the incoming request.
 * - `res`: The response object, used to send responses to the client.
 * - `next`: A function that, when called, passes control to the next middleware function in the chain
 */
const authMiddleware = (req, res, next) => {
    // Retrieves the JWT from the `Authorization` header of the request.
    const token = req.header("Authorization")?.split(" ")[1];

    // Checks for Token Existence
    /**
     * If token is empty or null, it means the request does not have a token.
     * Indicating that the user is not authenticated
     */
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
        req.user = decoded; // Returns the decoded payload of the token if verification is successful
        
        /**
         * If the verification is successful, the `next()` function is called,
         * passing control to the next middleware function or route handler
         */
        next();
    } catch (error) {
        // If the verification fails, it throws an error.
        res.status(403).json({ message: "Invalid token" });
    }
};

export default authMiddleware;