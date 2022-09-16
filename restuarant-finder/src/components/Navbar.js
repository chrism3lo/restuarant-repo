import { Link } from 'react-router-dom';

export default function Navbar(){
    return <nav className="nav">
        <Link to="/" className="site-title">Eatify</Link>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/friends">Friends</Link>
            </li>
        </ul>
    </nav>
}