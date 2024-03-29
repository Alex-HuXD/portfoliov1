import { Link, useLocation } from 'react-router-dom'
import astronautHelmet from '../assets/astronaut-helmet.png'
import deadEye from '../assets/dead-eye.png'
import stack from '../assets/stack.png'
import envelope from '../assets/envelope.png'
import '../styles/nav.css'

export default function Nav() {
    const location = useLocation()

    const getNavPositionClass = () => {
        switch (location.pathname) {
            case '/portfoliov1':
                return 'nav-about'
            case '/portfoliov1/skills':
                return 'nav-skills'
            case '/portfoliov1/projects':
                return 'nav-projects'
            case '/portfoliov1/contact':
                return 'nav-contact'
            default:
                return ''
        }
    }

    const getPageTitle = () => {
        switch (location.pathname) {
            case '/portfoliov1':
                return 'ABOUT'
            case '/portfoliov1/skills':
                return 'SKILLS'
            case '/portfoliov1/projects':
                return 'PROJECTS'
            case '/portfoliov1/contact':
                return 'CONTACT'
            default:
                return ''
        }
    }

    const navPositionClass = getNavPositionClass()
    const pageTitle = getPageTitle()

    const isCurrentPage = navClass => {
        return navClass === navPositionClass
    }

    const renderNavLink = (to, imgSrc, altText, navClass) => {
        const isCurrent = isCurrentPage(navClass)
        const linkClass = isCurrent ? 'nav-link current' : 'nav-link'

        return (
            <Link to={to} className={linkClass}>
                <img src={imgSrc} alt={altText} />
                {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
            </Link>
        )
    }

    return (
        <nav className={`nav ${navPositionClass}`}>
            {renderNavLink('/portfoliov1', astronautHelmet, 'astronaut helmet icon', 'nav-about')}
            {renderNavLink('/portfoliov1/skills', deadEye, 'deadEye icon', 'nav-skills')}
            {renderNavLink('/portfoliov1/projects', stack, 'stack icon', 'nav-projects')}
            {renderNavLink('/portfoliov1/contact', envelope, 'envelope icon', 'nav-contact')}
        </nav>
    )
}
