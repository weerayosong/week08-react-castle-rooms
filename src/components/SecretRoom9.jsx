import { useState } from 'react'

function SecretRoom9({ banana, sendPapayaBack }) {
    // State for this room(SecretRoom9)'s textArea
    const [answer, setAnswer] = useState('')

    const handleAnswer = (event) => {
        console.log(event)
        const text = event.target.value

        // อันนี้ เอาค่าใน textArea ไว้เล่นในห้องนี้
        setAnswer(text)

        // อันนี้ตัวที่มากะ prop รับค่า textArea ห้องนี้ ปุ๊บ | ส่งกลับ to App.jax ทันที ข้ามทุกห้องเลย
        sendPapayaBack(text)
    }
    return (
        <div className="bg-gray-900 p-6 rounded-xs flex flex-col items-center w-full">
            <h2 className="text-xl font-bold mb-4 text-white">SecretRoom9</h2>

            <p className="text-purple-400 text-sm">'question' From Outside0:</p>
            {/* banana Prop display here */}
            <div className="bg-gray-700 w-30% p-2 rounded-xs mb-4 text-center text-yellow-300 font-bold min-h-10">
                {banana ? banana : '...W8ting 4 ur Secret 😈😈😈'}
            </div>

            <p className="text-lime-400 text-xs mt-4">
                Reply 'answer' Back to Outside0:
            </p>
            <textarea
                value={answer}
                onChange={handleAnswer}
                className="bg-white text-zinc-700 text-xs w-20% rounded-xs px-2 py-1 w-50% text-center pt-5"
                placeholder="Type 'answer' reply here..."
            />
        </div>
    )
}

export default SecretRoom9
