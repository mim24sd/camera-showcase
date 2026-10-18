
import heroImage from '../../assets/images/about/heroImage.png'
import philosophyImage from '../../assets/images/about/philosophyImage.png'
import lensImage from '../../assets/images/about/lensImage.png'
import './styles.css'

const principles = [
    { number: '01', title: 'PREMIUM', detail: 'MATERIALS' },
    { number: '02', title: 'TIMELESS', detail: 'DESIGN' },
    { number: '03', title: 'BUILT', detail: 'TO LAST' },
]

export default function About() {
    return (
        <div className="about-page">
            <section className="hero" aria-labelledby="hero-title">
                <img
                    className="hero-image"
                    src={heroImage}
                    alt="Close-up of a LUMEN camera in warm cinematic light"
                    fetchPriority="high"
                />

                <div className="hero-shade" aria-hidden="true" />

                <div className="hero-content">
                    <p className="eyebrow hero-eyebrow">ABOUT LUMEN</p>

                    <h1 className="hero-title" id="hero-title">
                        More than
                        <br />
                        a camera.
                    </h1>

                    <p className="hero-description">
                        A different way of seeing
                        <br className="desktop-break" /> the world.
                    </p>
                </div>
            </section>

            <section
                className="philosophy"
                id="about-philosophy"
                aria-labelledby="philosophy-title"
            >
                <div className="philosophy-copy">
                    <p className="eyebrow philosophy-eyebrow">OUR PHILOSOPHY</p>

                    <h2 className="philosophy-title" id="philosophy-title">
                        Every detail
                        <br />
                        tells a story.
                    </h2>

                    <p className="philosophy-description">
                        We believe photography is more than capturing an image. It’s about
                        noticing what others might miss — the light, the texture, the moment.
                        LUMEN is designed for people who want to see the world more deeply.
                    </p>
                </div>

                <div className="philosophy-visual">
                    <img
                        className="philosophy-image"
                        src={philosophyImage}
                        alt="LUMEN camera displayed on a warm limestone surface"
                        loading="lazy"
                    />
                </div>
            </section>

            <section className="craftsmanship" aria-labelledby="craft-title">
                <div className="craft-visual">
                    <img
                        className="craft-image"
                        src={lensImage}
                        alt="Macro detail of precision camera lens rings and markings"
                        loading="lazy"
                    />

                    <div className="craft-shade" aria-hidden="true" />
                </div>

                <div className="craft-copy">
                    <p className="eyebrow craft-eyebrow">
                        CRAFTED FOR A HIGHER STANDARD
                    </p>

                    <h2 className="craft-title" id="craft-title">
                        Precision
                        <br />
                        in every frame.
                    </h2>

                    <p className="craft-description">
                        From the materials we choose to the way each component works together,
                        every element is crafted with purpose. Form, function, and feeling —
                        in perfect balance.
                    </p>

                    <div className="principles" aria-label="LUMEN design principles">
                        {principles.map((principle) => (
                            <div className="principle" key={principle.number}>
                                <span className="principle-number">
                                    {principle.number}
                                </span>

                                <span className="principle-rule" aria-hidden="true" />

                                <span className="principle-label">
                                    {principle.title}
                                    <br />
                                    {principle.detail}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
