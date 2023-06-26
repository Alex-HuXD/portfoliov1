import './App.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Background from './components/Background'
import Player from './components/Player'
import About from './components/about/About'

const router = createBrowserRouter([
    {
        path: '/portfoliov1',
        element: (
            <>
                <Nav />
                <Background />
                <Outlet />
                <Player />
            </>
        ),
        errorElement: <p>Error page</p>,
        children: [
            { index: true, element: <About /> },
            { path: 'about', element: <About /> },
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
