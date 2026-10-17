
import { Link } from 'react-router-dom'
import './styles.css'

const Header = () => {
    return (
        <header className="site-header">
            <div className="inner">
                <Link to="/" className="logo">
                    LUMEN
                </Link>

                <nav className="nav" aria-label="Main navigation">
                    <Link to="/">HOME</Link>
                    <Link to="/about">ABOUT</Link>
                    <Link to="/buy">BUY</Link>
                </nav>
            </div>
        </header>
    )
}

export default Header
