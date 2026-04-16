import { createBrowserRouter } from "react-router";
import { PageExplorer } from "../pages/pageExplorer";
import { PageFeed } from "../pages/pageFeed";
import { PageProfile } from "../pages/pageProfile";
import { PageHome } from "../pages/pageHome";
import { PageLogin } from "../pages/pageLogin";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <PageLogin />
    },
    {
        path:'/home',
        element: <PageHome />
    },
    {
        path:'/explorer',
        element: <PageExplorer />
    },
    {
        path:'/feed',
        element: <PageFeed />
    },
    {
        path:'/profile',
        element: <PageProfile />
    },
    
    
])