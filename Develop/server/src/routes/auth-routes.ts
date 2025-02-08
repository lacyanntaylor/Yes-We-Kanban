import { Router, Request, Response } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
  // TODO: If the user exists and the password is correct, return a JWT token

  try {
    const { username, password } = req.body; // Destructure username and password from the request body

    // Find the user by username (or email, depending on your model)
    const user = await User.findOne({ username });
    
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' }); // User not found
    }

    // Compare the entered password with the hashed password stored in the database
    const passwordMatch = await bcrypt.compare(password, user.password);
    
    if (!passwordMatch) {
      return res.status(400).json({ message: 'Invalid credentials' }); // Password mismatch
    }

    // If the credentials are valid, generate a JWT token
    const token = jwt.sign(
      { username: user.username }, // Payload: user data to include in the token
      process.env.JWT_SECRET_KEY as string, // Secret key to sign the token
      { expiresIn: '1h' } // Optional: set the token to expire in 1 hour
    );

    // Return the JWT token to the client
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' }); // Handle any server-side errors
  }
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
