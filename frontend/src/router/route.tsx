import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import HomePage from '../pages/HomePage'

const routes = [
  {
    path: '/',
    component: <HomePage />
  },
  {
    path: '/login',
    component: <LoginPage />,
  },
  {
    path: '/register',
    component: <RegisterPage />,
  }
];

export default routes;