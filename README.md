# Admin dashboard boilerplate for Restaurant reservation Project

This project is an admin dashboard boilerplate for Restaurant reservation platform built using React. It follows a modular architecture to maintain code organization and scalability.

## Links

- **Dashboard:** [restaurant-reservation-self.vercel.app](https://restaurant-reservation-self.vercel.app/)

## Table of Contents

- [Installation](#installation)
- [Project Dependencies](project-Dependencies)
- [Contributing Guidelines](contributing-guidelines)
- [Authentication](#authentication)
- [Usage](#usage)
- [Localization & Internationalization](#Localization) 
- [Environment](#environment) 
- [License](#license)



## Installation

### Prerequisites
Ensure you have Node.js and npm installed on your machine.


### Installation Instructions

1. Clone the repository:

    ```bash
    git clone https://github.com/yacinebkt/restaurant-reservation.git
    cd restaurant-reservation
    ```

2. Install dependencies:

    ```bash
    npm install
    ```



3. Set up environment variables:

    ```bash
    cp .env.example .env
    ```


4. Configure the .env file with the appropriate values.:

    ```bash
    VITE_API_URL=API_ENDPOINT

    ```

### Running the Application



1. To start the development server:

    ```bash
    npm run dev
    ```


2. To build the project for production:

    ```bash
    npm run build
    ```

3. To serve the built project:

    ```bash
    npm run serve
    ```



## Project Dependencies
This project uses the following major dependencies:

1. React for building the user interface.
2. React Router for managing routing.
3. React Query for data fetching and caching.
4. Redux for state management.
5. Material-UI and Tailwind CSS for styling and UI components.
6. Vite as the build tool.



## Contributing Guidelines
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch with a descriptive name.
3. Make your changes.
4. Commit your changes.
5. Push to the branch.
6. Open a pull request for review.




## Authentication Context 

Here's an example of how the authentication context is managed in this project:


### AuthGuard.tsx

The AuthGuard component is used to protect routes that require authentication.


```typescript
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types/authTypes';

interface AuthGuardProps {
  children: React.ReactNode;
  redirectTo: string;
  requireAuth: boolean;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children, redirectTo, requireAuth }) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (requireAuth && !isAuthenticated) {
    navigate(redirectTo);
    return null;
  }

  if (!requireAuth && isAuthenticated) {
    navigate(redirectTo);
    return null;
  }

  return <>{children}</>;
};

export default AuthGuard;

```




### Routes Configuration

```typescript
import AuthGuard from '@/guards/AuthGuard';

// ...

<Routes>
  <Route path="/signin" element={<SignIn />} />
  <Route path="/signup" element={<SignUp />} />
  <Route path="/forgot-password" element={<ForgotPassword />} />
  <Route path="/dashboard" element={
    <AuthGuard requireAuth redirectTo="/signin">
      <Dashboard />
    </AuthGuard>
  } />
</Routes>
```



## Localization & Internationalization

The dashboard is designed to support multiple languages to cater to a global audience. We use **i18n** for internationalization, allowing easy addition of new languages.


### Adding a New Language

1. Create a new locale file in the `src/modules/i18/translations` directory.
2. Add translations for the new language.
3. Update the language selector component to include the new language.
4. Test the application to ensure translations are correctly applied.



<!-- Example: src/modules/i18/translations/es.json -->
```json
{
  "welcome": "Bienvenido a Dashboard",
  "dashboard": "Tablero de mandos",
  "settings": "Configuraciones"
}

```

## Environment

This project requires the following environment variables to be set:



```bash

# production, development, or test
VITE_API_URL=API_ENDPOINT

```




## Usage
To start the application, use the following command:

```bash

npm start

```



##License

```bash

____________

```



