import Castle1 from './components/Castle1';

export default function App() {
    return (
        <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
            <p className="text-purple-400">Message for JSD12:</p>
            <span className="text-yellow-300">
                {/* question or waitng for a message */}
            </span>
            <textarea
                value="Banana"
                onChange=""
                className="bg-white text-zinc-500 rounded-xs px-2 py-1"
                placeholder="Type your message here..."
            ></textarea>
            <p className="text-lime-400">Reply from Secret Room:</p>
            <span>{/* question or waitng for a message */}</span>
            <Castle1 />
        </div>
    );
}
