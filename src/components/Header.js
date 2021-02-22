import PropTypes from 'prop-types'
import { useLocation } from "react-router-dom";
import Button  from "./Button"

import { FaInfoCircle } from 'react-icons/fa'

const Header = ({ title, onAdd, showAdd }) => {
    
    const location = useLocation()

    return (
        <header className='header'>

        <h1>{title}</h1>

        {location.pathname === '/' && 
        (
            <Button 
                color={showAdd ? 'Crimson':'YellowGreen'} 
                text={showAdd ? '- Close':'+ Add'} 
                onClick={onAdd} 
            />
        )}

        </header>
        
    )
}

Header.defaultProps = {
    title: 'TASK TRACKER',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header

