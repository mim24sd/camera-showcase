import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from "./pages/home/Home"
import About from "./pages/about/About";
import Buy from "./pages/buy/Buy"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/buy" element={<Buy />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}