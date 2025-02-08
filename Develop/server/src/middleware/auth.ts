import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // TODO: verify the token exists and add the user data to the request object

// Get the token from the Authorization header
const token = req.header('Authorization')?.replace('Bearer ', '');

// If the token is not provided, return an error
if (!token) {
  return res.status(401).json({ message: 'Access Denied. No token provided.' });
}

// Verify the token
jwt.verify(token, process.env.JWT_SECRET_KEY as string, (err, decoded) => {
  if (err) {
    return res.status(403).json({ message: 'Invalid token' });
  }

  // If the token is valid, attach the decoded data (username) to the request object
  req.user = (decoded as JwtPayload).username;

  // Call the next middleware or route handler
  next();
});

};
