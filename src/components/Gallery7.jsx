import React from 'react'
import Nook8 from './Nook8'

function Gallery7({ banana, sendPapayaBack }) {
    return (
        <div className="flex flex-col justify-center items-center pt-10 bg-blue-600 w-[90%]">
            <h1 className="text-xl font-bold text-white mb-3">Gallery7</h1>
            {/* {banana ? banana : 'Waiting fo message...'} */}
            <Nook8 banana={banana} sendPapayaBack={sendPapayaBack} />
        </div>
    )
}

export default Gallery7
