import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  // Get the decoded token payload
  getProfile() {
    const token = this.getToken();
    if (token) {
      try {
        return jwtDecode<JwtPayload>(token); // Decode and return the JWT payload
      } catch (error) {
        console.error('Invalid token', error);
        return null;
      }
    }
    return null; // Return null if no token is available
  }

  // Check if the user is logged in
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // Check if token exists and is not expired
  }
  
  // Check if the token is expired
  isTokenExpired(token: string) {
    try {
      const decoded = jwtDecode<JwtPayload>(token); // Decode the JWT
      const currentTime = Date.now() / 1000; // Current time in seconds
      return decoded.exp ? decoded.exp < currentTime : false; // Check if the token is expired
    } catch (error) {
      console.error('Error decoding token', error);
      return true; // Treat any errors as expired
    }
  }

  // Get the token from localStorage
  getToken(): string {
    return localStorage.getItem('jwtToken') || ''; // Return the stored token or an empty string
  }

  // Login: set the token to localStorage and redirect to the home page
  login(idToken: string) {
    localStorage.setItem('jwtToken', idToken); // Store the token
    window.location.href = '/home'; // Redirect to the home page
  }

  // Logout: remove the token from localStorage and redirect to the login page
  logout() {
    localStorage.removeItem('jwtToken'); // Remove the token from localStorage
    window.location.href = '/login'; // Redirect to the login page
  }
}

export default new AuthService();
