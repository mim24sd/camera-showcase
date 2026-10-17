import ScrollImageSequence from "./components/ScrollImageSequence";

export default function App() {
    return (
        <main className="app-layout">
            <ScrollImageSequence
                frameCount={150}
                frameFolder="/frames-sequence"
                filePrefix="frame-"
                extension="jpg"
                startFrame={1}
                scrollHeight={400}
            />
            <div className="background-blur" aria-hidden="true" />
        </main>
    );
}