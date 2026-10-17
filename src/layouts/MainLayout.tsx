import type { ReactNode } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

interface MainLayoutProps {
    children: ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="app-layout">
            <Header />
            <main className="content">{children}</main>
            <Footer />
        </div>
    )
}

export default MainLayout