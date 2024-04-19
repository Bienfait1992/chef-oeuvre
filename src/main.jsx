import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './fontend/component/layout.jsx'
import Home from './fontend/component/Home.jsx'
import Vetements from './fontend/pages/vetements.jsx'
import Meuble from './fontend/pages/meuble.jsx'
import Cuisine from './fontend/pages/cuisine.jsx'
import Electronique from './fontend/pages/electronique.jsx'
import Signup from './fontend/pages/signup.jsx'
import MontreB from './fontend/pages/montre_bijoux.jsx'
import Decoration from './fontend/pages/decoration_maison.jsx'
import Informatique from './fontend/pages/informatique.jsx'
import Bilokos from './fontend/pages/bilokos.jsx'
import Telephone from './fontend/pages/telephone.jsx'
import VetementH from './fontend/pages/vethome.jsx'
import VetementF from './fontend/pages/vetfemme.jsx'
import VetementE from './fontend/pages/vetenfant.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      { 
      path: "/signup",
      element: <Signup />
        },
  {
    path: "/cuisine",
    element: <Cuisine />
  },
  {
    path: "/vetement",
    element: <Vetements />
  },
  {
    path: "/meuble",
    element: <Meuble />
  },
  {
    path: "/electronique",
    element: <Electronique />
  },
  {
    path: "/montreB",
    element: <MontreB />
  },
  {
    path: "/decoration",
    element: <Decoration />
  },
  {
    path: "/informatique",
    element: <Informatique />
  },
  {
    path: "/bilokos",
    element: <Bilokos />
  },
  {
    path: "/telephone",
    element: <Telephone />
  },
  {
    path: "/VetementH",
    element: <VetementH />
  },
  {
    path: "/VetementF",
    element: <VetementF />
  },
  {
    path: "/VetementE",
    element: <VetementE />
  },
]
    }
  ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
