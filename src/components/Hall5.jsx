import React from 'react';
import Corridor6 from './Corridor6';

function Hall5({ banana, sendPapayaBack }) {
    return (
        <div className="flex flex-col justify-center items-center pt-10 bg-emerald-500 w-[90%]">
            <h1 className="text-xl font-bold text-white mb-3">Hall5</h1>

            <Corridor6 banana={banana} sendPapayaBack={sendPapayaBack} />
        </div>
    );
}

export default Hall5;
