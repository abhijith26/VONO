import {BrowserRouter, Link} from 'react-router-dom'
import '../styles/navbar.css'

export default function Navbar(props) {
    return (
        <nav className="navbar">
            <div className="logo">VONO</div>
            <div className="nav-items">
                <Link  className="nav-item" to="/home"><div>Home</div></Link>
                <Link to="/mynotes"><div className="nav-item">My notes</div></Link>
                <Link to="/tasks"><div className="nav-item">Tasks</div></Link>

            </div>
        </nav>
    )

}