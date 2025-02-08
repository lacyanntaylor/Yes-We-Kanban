import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: make a POST request to the login route

  try {
    // Make a POST request to the login route with the userInfo
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Login failed. Please check your credentials.');
    }

    // If login is successful, parse the response JSON
    const data = await response.json();

    // Extract the token from the response
    const { token } = data;

    // Store the JWT securely in localStorage
    localStorage.setItem('jwtToken', token);

    // Optionally, you can return the token or any other relevant data
    return token;
  } catch (error) {
    console.error('Login failed:', error);
    throw new Error('Login failed. Please check your credentials.');
  }
}



export { login };
