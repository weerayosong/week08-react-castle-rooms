import { useState } from 'react'
import { MessageContext } from '../messageContext/MessageContext'

const MessageProvider = ({ children }) => {
    // State Variable
    const [question, setQuestion] = useState('')
    const [reply, setReply] = useState('')

    const handleQuestion = (event) => {
        // console.log(event)
        // console.log(event.target)
        // console.log(event.target.value)
        setQuestion(event.target.value)
        // setQuestion('2 set useStaste working')
    }
    return (
        <MessageContext.Provider
            value={{ question, reply, setReply, handleQuestion }}
        >
            {children}
        </MessageContext.Provider>
    )
}
export default MessageProvider
