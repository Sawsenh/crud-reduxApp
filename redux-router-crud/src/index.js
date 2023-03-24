import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from "./RootLayout";
import Add from './add'
import Edit from "./edit";
import Deatils from "./Details";
import Index from "./components/index";
import { Provider } from "react-redux";
import store from "./state/store";




const router = createBrowserRouter([{
  path: "/",
  element: <RootLayout />,
  children: [
    {index:true, element:<Index/>},
    { path: "add", element: <Add /> },
    { path: ":id/edit", element: <Edit /> },
    { path: ":id", element: <Deatils />,
      loader:({params})=>{
        if (isNaN(params.id)){
          throw new Response("Bad Request", {status:400})
        }
      }
  },
   
  ]
}])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
   
 
);
