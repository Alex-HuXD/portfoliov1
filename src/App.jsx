import './App.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'
import Background from './components/Background'
import Player from './components/Player'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'

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
            { path: 'skills', element: <Skills /> },
            { path: 'projects', element: <Projects /> },
            { path: 'contact', element: <Contact /> },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
