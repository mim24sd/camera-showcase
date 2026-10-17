import './styles.scss'

const Header = () => {
    return (
        <header className="site-header">
            <div className="inner">
                <a href="#home" className="logo">
                    LUMEN
                </a>

                <nav className="nav" aria-label="Main navigation">
                    <a href="#home">HOME</a>
                    <a href="#about">ABOUT</a>
                    <a href="#buy">BUY</a>
                </nav>
            </div>
        </header>
    )
}

export default Header