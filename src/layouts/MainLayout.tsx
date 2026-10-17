import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

const MainLayout = () => {
    return (
        <div className="app-layout">
            <Header />
            <main className="content">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout