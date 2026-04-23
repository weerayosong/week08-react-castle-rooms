import { useState, useContext } from 'react'
import { MessageContext } from '../contexts/messageContext/MessageContext'

function SecretRoom9() {
    const { question, setReply } = useContext(MessageContext)

    // State for this room(SecretRoom9)'s textArea
    const [answer, setAnswer] = useState('')

    const handleAnswer = (event) => {
        console.log(event)
        const text = event.target.value

        // อันนี้ เอาค่าใน textArea ไว้เล่นในห้องนี้
        setAnswer(text)

        // อันนี้ตัวที่มากะ prop รับค่า textArea ห้องนี้ ปุ๊บ | ส่งกลับ to App.jax ทันที ข้ามทุกห้องเลย
        // handleReply(text)
        setReply(text)

        // debug
        console.log('พิมพ์จาก SecretRoom9:', text)
        console.log('มีฟังก์ชัน setReply ไหม?:', !!setReply)
    }
    return (
        <div className="bg-gray-900 w-[90%] p-6 rounded-xs flex flex-col items-center">
            <h2 className="text-xl font-bold mb-4 text-white text-center">
                😈
                <br />
                <strike>SecretRoom9</strike>
                <br />
                ฉันคือ Master Evil Emoji <br /> และด้านล่างนี่ คือ
                เพื่อนของชั้น!
            </h2>

            <p className="text-purple-400 text-sm pb-2">
                'question' From Outside0:
            </p>
            {/* banana Prop display here */}
            <div className="bg-gray-700 w-30% p-2 rounded-xs mb-4 text-center text-yellow-300 font-bold min-h-10">
                {question ? question : '...W8ting 4 ur Secret 😈😈😈'}
            </div>

            <p className="text-lime-400 text-xs mt-4 pb-2 text-center">
                Reply 'answer' Back to Outside0:
            </p>
            <textarea
                value={answer}
                onChange={handleAnswer}
                className="bg-white text-zinc-700 text-xs w-[90%] rounded-xs px-2 py-1 w-50% text-center pt-5"
                placeholder="Type 'answer' reply here..."
            />
        </div>
    )
}

export default SecretRoom9
