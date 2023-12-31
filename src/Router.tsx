import { createBrowserRouter } from 'react-router-dom';
import ProtectedRoute from './components/protectedRoute';
import Layout from './components/layout/layout';
import AuthLayout from './components/layout/authLayout';
import Home from './routes/home';
import Profile from './routes/profile';
import Login from './routes/auth/login';
import CreateAccount from './routes/auth/createAccount';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'create-account',
        element: <CreateAccount />,
      },
    ],
  },
]);
