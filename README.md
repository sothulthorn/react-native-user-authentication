# User Authentication App

The **User Authentication App** is a React Native application that implements a basic authentication flow, enabling users to sign up, log in, and log out using their email and password. The app integrates seamlessly with **Firebase Authentication** to handle user authentication processes and provides a secure and user-friendly experience.

## Features

- **Sign Up**: New users can register using their email and password, with validation to ensure secure account creation.
- **Log In**: Registered users can log in with their credentials to access the app's features.
- **Token Management**:
  - Upon successful authentication, the app retrieves a token from Firebase.
  - The token is stored securely on the device using `AsyncStorage`, ensuring users remain logged in even after restarting the app.
- **Log Out**: Users can log out, which clears the stored token, effectively ending the session.
- **Session Persistence**: The app checks for a stored token on launch to determine if the user should be logged in automatically.

## Technologies Used

- **React Native**: For building the mobile application.
- **Firebase Authentication**: For managing user authentication processes.
- **AsyncStorage**: To securely store the authentication token on the device.
- **Expo Splash Screen**: For a smooth loading experience during app initialization.

## How to Run the App

1. Clone the repository:
   ```bash
   git clone https://github.com/sothulthorn/react-native-user-authentication.git
   ```
2. Setup the environment (.env.local):
   ```bash
   EXPO_PUBLIC_API_KEY={YOUR_FIREBASE_API_KEY}
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Install dependencies:
   ```bash
   npm start
   ```

## Project View

| <div align="center">Sign In</div>                                        | <div align="center">Sign Up</div>                                         | <div align="center">Welcome</div>                                          |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| <div align="center"><img src="/screenshots/login.png" width="85%"></div> | <div align="center"><img src="/screenshots/signup.png" width="85%"></div> | <div align="center"><img src="/screenshots/welcome.png" width="85%"></div> |
