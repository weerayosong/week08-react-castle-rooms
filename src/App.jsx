import { useState } from 'react';
import Castle1 from './components/Castle1';

export default function App() {
    // State Variable
    const [question, setQuestion] = useState('1 Default State');

    const handleQuestion = (event) => {
        console.log(event);
        // console.log(event.target);
        // console.log(event.target.value);
        // setQuestion(event.target.value);
        setQuestion('2 ');
    };

    return (
        <div className="pb-80 py-10 gap-y-4 flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white">
            <p className="text-purple-400">Message for JSD12:</p>
            <span className="text-yellow-300">
                {/* question or waitng for a message */}
            </span>
            <textarea
                value={question}
                onChange={handleQuestion}
                className="bg-white text-zinc-700 rounded-xs px-2 py-1"
                placeholder="Type your message here..."
            ></textarea>
            <p className="text-lime-400">Reply from Secret Room:</p>
            <span>{/* question or waitng for a message */}</span>
            <Castle1 />
        </div>
    );
}
