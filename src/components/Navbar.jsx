export default function Navbar({ currentPage, setPage }) {
    const getBtnClass = (pageName) => {
        return `px-4 py-2 rounded-sm font-bold transition-all ${
            currentPage === pageName
                ? 'bg-lime-400 text-gray-900'
                : 'bg-slate-700 text-white hover:bg-gray-600'
        }`
    }

    return (
        <nav className="bg-gray-800 p-4 flex justify-center gap-4 shadow-md">
            <button
                onClick={() => setPage('home')}
                className={getBtnClass('home')}
            >
                Home
            </button>
            <button
                onClick={() => setPage('castle')}
                className={getBtnClass('castle')}
            >
                Castle Rooms
            </button>
            <button
                onClick={() => setPage('counter')}
                className={getBtnClass('counter')}
            >
                Counter
            </button>
            <button
                onClick={() => setPage('toggle')}
                className={getBtnClass('toggle')}
            >
                Toggle
            </button>
            <button
                onClick={() => setPage('form')}
                className={getBtnClass('form')}
            >
                Form
            </button>
        </nav>
    )
}
