import { NextFunction, Request, Response } from "express"
import jwt from "jsonwebtoken"

import dotenv from "dotenv"
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET as string;

// // custom interface extending express request
// interface AuthenticatedRequest extends Request {
//   userId?: string;
// }

export const userMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"];
    const decoded = jwt.verify(header as string, JWT_SECRET);
    if (decoded) {
        // @ts-ignore
        req.userId = decoded.id; 
        next();
    } else {
        res.status(401).json({ message: "Unauthorized User" });
    }
};