import ScrollImageSequence from '../../components/ScrollImageSequence'

const Home = () => {
    return (
        <section className="home">
            <ScrollImageSequence
                frameCount={150}
                frameFolder="/frames-sequence"
                filePrefix="frame-"
                extension="jpg"
                startFrame={1}
                scrollHeight={300}
            />
        </section>
    )
}

export default Home