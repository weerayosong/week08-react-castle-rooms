import { useState } from 'react'

export default function Toggle() {
    const [isOn, setIsOn] = useState(false)

    return (
        <div className="flex flex-col items-center justify-center mt-10 p-10 w-64 mx-auto">
            <h1 className="text-3xl font-bold text-white mb-6">Toggle</h1>

            <span
                className={`text-2xl font-bold mb-6 ${
                    isOn ? 'text-lime-400' : 'text-rose-500'
                }`}
            >
                {isOn ? 'ON' : 'OFF'}
            </span>

            <button
                onClick={() => setIsOn(!isOn)} // toggle true <=> false
                className={`w-20 h-10 flex items-center rounded-full p-1 transition-colors duration-300 cursor-pointer ${
                    isOn ? 'bg-slate-400' : 'bg-slate-600'
                }`}
            >
                <div
                    className={`bg-white w-8 h-8 rounded-full shadow-md transform transition-transform duration-300 ${
                        isOn ? 'translate-x-10' : 'translate-x-0'
                    }`}
                ></div>
            </button>
        </div>
    )
}
