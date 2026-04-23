import { useState, useEffect } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    // test useEffect จะทำงานทุกครั้งที่ [count] เปลี่ยนค่า
    useEffect(() => {
        console.log('Counter Page: no. of count ->', count)
    }, [count])

    return (
        <div className="text-center mt-10">
            <h1 className="text-4xl font-bold text-yellow-300 mb-6">
                👇
                <br /> <span>Counter</span>
            </h1>
            <p className="text-2xl text-white mb-4">You clicked: {count}</p>
            <button
                onClick={() => setCount(count > 0 ? count - 1 : 0)}
                className="bg-red-500 text-white px-6 py-2 mx-1 rounded-sm font-bold hover:bg-red-600 active:scale-95 transition-all"
            >
                ADD -1
            </button>
            <button
                onClick={() => setCount(count + 1)}
                className="bg-green-500 text-white px-6 py-2 mx-1 rounded-sm font-bold hover:bg-green-600 active:scale-95 transition-all"
            >
                ADD +1
            </button>
        </div>
    )
}
