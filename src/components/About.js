import { Link } from "react-router-dom";

import { FaChevronLeft, FaEye } from 'react-icons/fa'

const About = () => {
    return (
        <div>
            <h4> <FaEye />  Version 0.1</h4>
            <br></br>
            <div style={{'margin': '0px 20px','color':'darkgrey', 'fontStyle':'italic'}}>
                <ul>
                    <li>UI example, for some tasks tracking</li>
                    <li>Now using your Local Storage to store the tasks</li>
                </ul>
            </div>
   
            <div style={{'display':'flex', 'alignContent':'center', 'margin':'30px 0 0px 0'}}><Link to="/" style={{'textDecoration':'none', 'color':'limegreen'}}><FaChevronLeft /> <i style={{'zoom':'1.5'}}>Go back</i></Link></div>
        </div>
    )
}

export default About
