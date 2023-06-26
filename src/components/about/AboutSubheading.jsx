import PropTypes from 'prop-types'
import classNames from 'classnames'
import '../../styles/aboutMenu.css'

const AboutSubheading = ({ title, content, active, onClick, menuItem }) => {
    const subContainerClass = `sub-container-${menuItem}`

    return (
        <div className={classNames(subContainerClass, { 'active-subheading': active })}>
            <h3 onClick={onClick}>{title}</h3>
            <div className="p-container">{content}</div>
        </div>
    )
}

AboutSubheading.propTypes = {
    title: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
    content: PropTypes.object,
    menuItem: PropTypes.number,
}

export default AboutSubheading
