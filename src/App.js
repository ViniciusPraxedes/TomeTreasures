import './App.css';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Products from "./pages/Products/Products";
import Product from "./pages/Product/Product";
import "./app.scss"
import Contact from "./components/Contact/Contact";
import CategoryBar from "./components/CategoryBar/CategoryBar";

const Layout = () =>{
    return(
        <div className="app">
            <Navbar></Navbar>
            <CategoryBar/>
            <Outlet></Outlet>
            <Contact/>
            <Footer></Footer>
        </div>
    )
}

const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/products/:category",
                element: <Products/>
            },
            {
                path: "/product/:id",
                element: <Product/>
            },
        ]
    }
])

function App() {
    return (
        <div className="App">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
