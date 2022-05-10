import {Link} from 'react-router-dom'

function Navbar () {
    return (
        <ul>
            <Link to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/company">Company</Link>
            <Link to="/NewProject">Home</Link>
      </ul>
    )

}

export default Navbar