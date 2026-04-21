import React from 'react'
import SecretRoom9 from './SecretRoom9'

function Nook8({ banana, sendPapayaBack }) {
    return (
        <div className="flex flex-col justify-center items-center pt-10 bg-purple-500 w-[90%]">
            <h1 className="text-xl font-bold text-white mb-3">Nook8</h1>
            {/* {banana ? banana : 'Waiting fo message...'} */}
            <SecretRoom9 banana={banana} sendPapayaBack={sendPapayaBack} />
        </div>
    )
}

export default Nook8
