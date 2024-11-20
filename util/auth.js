import axios from 'axios';

const API_KEY = 'AIzaSyAhiFwOc9seN5X7k9d4UvSfkI1ID7XBSAs';

export async function createUser(email, password) {
  const response = await axios.post(
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
}
