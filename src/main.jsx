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
import DetailsVth from './fontend/pages/detailsVtmh.jsx'
import SignIn from './fontend/pages/signin.jsx'
import Livraison from './fontend/pages/livraison.jsx'
import Panier from './fontend/pages/panier.jsx'
import ListevetementH from './fontend/pages/listvetementH.jsx'
import Apropos from './fontend/pages/apropos.jsx'



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
        path: "/signin",
        element: <SignIn />
      },
      {
        path: "/livraison",
        element: <Livraison />
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
        path: "/",
        element: <VetementH />,
        children :[
          {
            path: "/listevetementH", 
            element: <ListevetementH /> 
          },
          {
            path: "/VetementH/:id", 
            element: <DetailsVth /> 
          },
          
        ]
      },
      // {
      //   path: "/detailsVth/:id", 
      //   element: <Panier /> 
      // },
      
      {
        path: "/VetementF",
        element: <VetementF />
      },
      {
        path: "/VetementE",
        element: <VetementE />
      },
      {
        path: "/panier",
        element: <Panier />
      },
      {
        path: "/apropos",
        element: <Apropos />
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
