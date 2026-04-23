import { useContext } from 'react'
import Castle1 from './components/Castle1'
import SimpleAsyncAwait from './examples/async/SimpleAsyncAwait'
import { MessageContext } from './contexts/messageContext/MessageContext'

export default function App() {
    const { question, reply, handleQuestion } = useContext(MessageContext)
    // debug
    console.log('App มองเห็น reply เป็น:', reply, '  | questioon?: ', question)

    return (
        <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
            <p className="text-purple-400 font-black text-2xl text-center">
                <strike>JSD12 at the OUTSIDE0</strike>
                <br />
                แกทำร้ายเพื่อนชั้น ..แกไม่รอดแน่!
            </p>
            <span className="text-yellow-300">
                {/* question or waitng for a message */}
                {question ? question : `[ display 'question' here too. ]`}
            </span>

            <textarea
                value={question}
                onChange={handleQuestion}
                className="bg-white text-zinc-700 w-sm rounded-xs px-2  text-center pt-5"
                placeholder="Type 'question' here..."
            ></textarea>

            <p className="text-lime-400">Reply from Secret Room:</p>
            <span className="bg-gray-700 p-2 rounded-xs mb-4 text-center text-yellow-300 font-bold min-h-10">
                {/* question or waitng for a message */}
                {reply ? reply : `🤫🤫🤫 ...Waiting for 'answer' reply`}
            </span>
            <Castle1 />

            <SimpleAsyncAwait />
        </div>
    )
}
