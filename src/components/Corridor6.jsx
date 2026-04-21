import React from 'react'
import Gallery7 from './Gallery7'

function Corridor6({ banana, sendPapayaBack }) {
    return (
        <div className="flex flex-col justify-center items-center pt-10 bg-sky-500 w-[90%]">
            <h1 className="text-xl font-bold text-white mb-3">Corridor6</h1>
            {/* {banana ? banana : 'Waiting fo message...'} */}
            <Gallery7 banana={banana} sendPapayaBack={sendPapayaBack} />
        </div>
    )
}

export default Corridor6
