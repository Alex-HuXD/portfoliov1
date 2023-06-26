import './App.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/portfoliov1',
        element: (
            <>
                <h1>Hello</h1>
                <Outlet />
            </>
        ),
        errorElement: <p>Error page</p>,
        children: [
            { index: true, element: <div>About</div> },
            { path: 'about', element: <div>About</div> },
            { path: 'skills', element: <div>Skills</div> },
            { path: 'projects', element: <div>Projects</div> },
            { path: 'contact', element: <div>Contact</div> },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
