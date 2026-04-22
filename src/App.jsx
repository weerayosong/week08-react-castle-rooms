import { useState } from 'react';
import Castle1 from './components/Castle1';
import SimpleAsyncAwait from './examples/async/SimpleAsyncAwait';

export default function App() {
    // State Variable
    const [question, setQuestion] = useState('');
    const [reply, setReply] = useState('');

    const handleQuestion = (event) => {
        console.log(event);
        // console.log(event.target)
        // console.log(event.target.value)
        setQuestion(event.target.value);
        // setQuestion('2 set useStaste working')
    };

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
            <Castle1
                banana={question}
                // ตัวที่ต้องส่งไปรับ คือ function ที่จะset(useState)ของ reply คือ setReply(event.target.valueใน textArea ของห้อง 9 นู่น)
                sendPapayaBack={setReply} // อ๋ออออ เขาเรียกว่า setter function
                // reply นี้คืดข้อมูลท้ายสุด มีไว้แสดงผลอย่างเดียวเลย
                papaya={reply} // อันนี้ส่งจาก App.jsx เอาไปทำส่วนแสดงผลหลอก ๆ เหมือนว่ามี answer นี้ส่งกลับมา 555
            />

            <SimpleAsyncAwait />
        </div>
    );
}
