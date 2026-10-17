import { Link } from 'react-router-dom'
import './styles.css'

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="inner">
                <div className="top">
                    <div className="brand">
                        <Link to="/" className="logo">
                            LUMEN
                        </Link>
                        <p className="tagline">SEE BEYOND.</p>
                    </div>

                    <nav className="nav" aria-label="Footer navigation">
                        <Link to="/">HOME</Link>
                        <Link to="/about">ABOUT</Link>
                        <Link to="/buy">BUY</Link>
                    </nav>

                    <div className="socials" aria-label="Social media">
                        <a href="#instagram" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                                <circle cx="12" cy="12" r="4" />
                                <circle className="icon-fill" cx="17.5" cy="6.8" r="1" />
                            </svg>
                        </a>

                        <a href="#youtube" aria-label="YouTube">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <rect x="2.5" y="5" width="19" height="14" rx="4" />
                                <path className="icon-cutout" d="M10 9v6l5-3-5-3Z" />
                            </svg>
                        </a>

                        <a href="#x" aria-label="X">
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M5 4.5 19 19.5M19 4.5 5 19.5M5 4.5h4l10 15h-4l-10-15Z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="bottom">
                    <p className="copyright">
                        © {new Date().getFullYear()} LUMEN. All rights reserved.
                    </p>

                    <nav className="legal" aria-label="Legal navigation">
                        <a href="#privacy">PRIVACY</a>
                        <a href="#terms">TERMS</a>
                        <a href="#contact">CONTACT</a>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer