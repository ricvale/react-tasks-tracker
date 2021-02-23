import { Link } from "react-router-dom";
import { FaInfoCircle } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <br /><hr />
            <br />
            <div style={{'float':'right', 'marginRight': '10px'}}><Link to="./about" style={{'color':'black'}}> <FaInfoCircle style={{'zoom':'1.2'}} /> </Link></div>
            <p style={{ 'float': 'left'}}> Copyright &copy;{ (new Date()).getFullYear() }</p>
            
        </footer>
    )
}

export default Footer
