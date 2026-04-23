import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Counter from './components/Counter'
import CastleRooms from './components/CastleRooms'
import Toggle from './components/Toggle'
import Form from './components/Form'

export default function App() {
    const [currentPage, setCurrentPage] = useState('home')

    const renderPage = () => {
        if (currentPage === 'home') {
            return <Home />
        } else if (currentPage === 'counter') {
            return <Counter />
        } else if (currentPage === 'castle') {
            return <CastleRooms />
        } else if (currentPage === 'toggle') {
            return <Toggle />
        } else if (currentPage === 'form') {
            return <Form />
        }
    }

    return (
        <div className="min-h-screen bg-gray-900 overflow-y-scroll">
            <Navbar currentPage={currentPage} setPage={setCurrentPage} />
            <div className="p-8">{renderPage()}</div>
        </div>
    )
}
