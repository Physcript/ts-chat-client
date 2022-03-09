import { IRoute } from "../interface/routes";
import HomePage from "../pages/HomePage";
import RLPage from "../pages/RLPage";
import StartPage from "../pages/StartPage";



const mainRoute: IRoute[] = [
  {
    path: '/',
    element: StartPage,
    auth: false
  },
  {
    path: '/home',
    element: HomePage,
    auth: true
  }
]

const rlRoute: IRoute[] = [
  {
    path: '/login',
    element: RLPage,
    auth: false,
  }, 
  {
    path: '/register',
    element: RLPage, 
    auth: false
  }
]

const route: IRoute[] = [
  ...mainRoute,
  ...rlRoute
]


export default route
