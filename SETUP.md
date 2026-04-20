# Quick Start Guide

## Installation Steps

1. **Navigate to project directory:**
   ```bash
   cd angular-app-deploy
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm start
   ```

4. **Open in browser:**
   Navigate to `http://localhost:4200`

## Default Routes

- **Login**: `http://localhost:4200/login` (or `http://localhost:4200/`)
- **Signup**: `http://localhost:4200/signup`
- **Dashboard**: `http://localhost:4200/dashboard` (Protected - requires login)

## Testing the App

1. Click "Sign up here" on the login page to go to signup
2. Create an account with any email and password (6+ characters)
3. After signup, you'll be redirected to dashboard
4. Click "Logout" to return to login page

## API Configuration

Before connecting to your backend:

1. Open `src/app/services/auth.service.ts`
2. Update the `apiUrl` variable with your backend API URL:
   ```typescript
   private apiUrl = 'http://your-backend-url/api';
   ```

## Backend API Requirements

Your backend should provide these endpoints:

### Login Endpoint
- **URL**: `POST /api/auth/login`
- **Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "token": "jwt-token",
    "user": {
      "id": "user-id",
      "email": "user@example.com"
    }
  }
  ```

### Signup Endpoint
- **URL**: `POST /api/auth/signup`
- **Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123",
    "confirmPassword": "password123"
  }
  ```
- **Response**:
  ```json
  {
    "token": "jwt-token",
    "user": {
      "id": "user-id",
      "email": "user@example.com"
    }
  }
  ```

## Project Features Ready for Integration

✅ Form validation (email, password)
✅ Error handling and display
✅ Authentication service with API calls
✅ Route protection with Auth Guard
✅ Token storage in localStorage
✅ Logout functionality
✅ Responsive UI with modern styling
✅ Environment-based configuration
✅ Standalone components (Angular 14+ syntax)

## File Structure

```
src/
├── app/
│   ├── components/       # UI components
│   ├── services/         # Business logic & API calls
│   ├── guards/          # Route guards
│   ├── app.routes.ts    # Route configuration
│   ├── app.config.ts    # App configuration
│   └── app.component.*  # Root component
├── environments/         # Environment configs
├── index.html           # HTML entry point
├── main.ts              # Bootstrap file
└── styles.css           # Global styles
```

## Useful Commands

```bash
# Start dev server
npm start

# Build for production
npm build

# Run tests
npm test

# Generate component
ng generate component components/my-component

# Generate service
ng generate service services/my-service
```

## Notes

- The app uses standalone components (Angular's latest approach)
- All components use reactive forms for validation
- HTTP client is already configured for API calls
- Authentication token is stored in localStorage
- Customize styling in individual component CSS files
- Update API URL in `environment.ts` and `environment.prod.ts`

## Next Steps

1. Set up your backend API with the required endpoints
2. Update the API URL in the environment files
3. Test login/signup with your backend
4. Customize the dashboard and add your features
5. Add more routes and components as needed

For more details, see README.md
