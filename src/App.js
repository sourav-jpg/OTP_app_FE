import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import all components
import Username from "./component/Username";
import Reset from "./component/Reset";
import Register from "./component/Register";
import Recovery from "./component/Recovery";
import Profile from "./component/Profile";
import Password from "./component/Password";
import PageNotFound from "./component/PageNotFound";

// root route
const router = createBrowserRouter([
  {
    path: "/",
    element: <Username></Username>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/password",
    element: <Password></Password>,
  },
  {
    path: "/profile",
    element: <Profile></Profile>,
  },
  {
    path: "/recovery",
    element: <Recovery></Recovery>,
  },
  {
    path: "/reset",
    element: <Reset></Reset>,
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={router}>
        
      </RouterProvider>
    </main>
  );
}

export default App;
