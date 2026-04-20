# Angular App - Login, Signup & Dashboard

A simple Angular application with Login, Signup, and Dashboard components. This app is designed for testing purposes and is ready for API integration.

## Features

- **Login Component**: User authentication with email and password validation
- **Signup Component**: User registration with password confirmation validation
- **Dashboard Component**: Protected dashboard with logout functionality
- **Auth Guard**: Route protection to prevent unauthorized access
- **Auth Service**: Ready for API integration with login/signup endpoints
- **Responsive Design**: Mobile-friendly UI with gradient backgrounds

## Project Structure

```
angular-app-deploy/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── login/
│   │   │   │   ├── login.component.ts
│   │   │   │   ├── login.component.html
│   │   │   │   └── login.component.css
│   │   │   ├── signup/
│   │   │   │   ├── signup.component.ts
│   │   │   │   ├── signup.component.html
│   │   │   │   └── signup.component.css
│   │   │   └── dashboard/
│   │   │       ├── dashboard.component.ts
│   │   │       ├── dashboard.component.html
│   │   │       └── dashboard.component.css
│   │   ├── services/
│   │   │   └── auth.service.ts
│   │   ├── guards/
│   │   │   └── auth.guard.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── tsconfig.json
├── tsconfig.app.json
└── package.json
```

## Installation

1. Navigate to the project directory:
   ```bash
   cd /Users/prasum/Desktop/My\ Project/angular-app-deploy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:4200`

## API Integration

The app is ready for API integration. To connect your backend APIs:

1. **Update the API URL** in [src/app/services/auth.service.ts](src/app/services/auth.service.ts):
   ```typescript
   private apiUrl = 'http://your-api-url/api'; // Change this to your API URL
   ```

2. **Login API Endpoint**: `POST /api/auth/login`
   - Expected Request:
     ```json
     {
       "email": "user@example.com",
       "password": "password123"
     }
     ```
   - Expected Response:
     ```json
     {
       "token": "jwt-token-here",
       "user": {
         "id": "user-id",
         "email": "user@example.com"
       }
     }
     ```

3. **Signup API Endpoint**: `POST /api/auth/signup`
   - Expected Request:
     ```json
     {
       "email": "user@example.com",
       "password": "password123",
       "confirmPassword": "password123"
     }
     ```
   - Expected Response:
     ```json
     {
       "token": "jwt-token-here",
       "user": {
         "id": "user-id",
         "email": "user@example.com"
       }
     }
     ```

## Testing

Use the following test credentials with your backend API:

- **Email**: test@example.com
- **Password**: test123456

## Components Overview

### Login Component
- Email and password validation
- Error handling and display
- Link to signup page
- Calls `AuthService.login()` on form submission

### Signup Component
- Email, password, and confirm password validation
- Password match validation
- Error handling and display
- Link to login page
- Calls `AuthService.signup()` on form submission

### Dashboard Component
- Protected route (requires authentication)
- Logout functionality
- Placeholder sections for Profile, Settings, Activity, and Help
- Responsive grid layout

## Services

### AuthService
Handles authentication-related operations:
- `login(credentials)`: Authenticates user with email and password
- `signup(data)`: Registers a new user
- `logout()`: Clears authentication token
- `setToken(token)`: Stores JWT token in localStorage
- `getToken()`: Retrieves JWT token from localStorage
- `isTokenPresent()`: Checks if user is authenticated

## Guards

### AuthGuard
Protects the dashboard route and redirects to login if user is not authenticated.

## Future Enhancements

- Add HTTP interceptor for token handling
- Implement user profile management
- Add email verification
- Implement password reset functionality
- Add 2FA (Two-Factor Authentication)
- Implement role-based access control
- Add user activity logging
- Implement refresh token mechanism

## Building for Production

```bash
npm run build
```

The compiled files will be in the `dist/angular-app` directory.

## Dependencies

- **Angular 18**: Frontend framework
- **RxJS**: Reactive programming library
- **Angular Forms**: Form handling and validation
- **Angular Router**: Client-side routing

## License

This project is open source and available for personal and commercial use.

## Support

For issues or questions, please create an issue in the project repository.
