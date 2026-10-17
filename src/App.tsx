import ScrollImageSequence from './components/ScrollImageSequence'
import MainLayout from './layouts/MainLayout'

export default function App() {
    return (
        <MainLayout>
            <ScrollImageSequence
                frameCount={150}
                frameFolder="/frames-sequence"
                filePrefix="frame-"
                extension="jpg"
                startFrame={1}
                scrollHeight={400}
            />
        </MainLayout>
    )
}