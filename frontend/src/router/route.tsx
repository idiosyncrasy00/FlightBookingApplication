import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import HomePage from '../pages/HomePage'
import SecretPage from '../pages/SecretPage'
import Profile from '../components/Profile'

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
  },
  //for testing frontend purposes
  {
    path: 'secret',
    component: <SecretPage />
  },
  {
    path: 'profileTest',
    component: <Profile />
  }

];

export default routes;