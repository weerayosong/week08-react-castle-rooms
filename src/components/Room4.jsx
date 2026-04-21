import Hall5 from './Hall5'
export default function Room4({ banana, sendPapayaBack }) {
    return (
        <div className="flex flex-col justify-center items-center pt-10 bg-lime-500 w-[90%]">
            <h1 className="text-xl font-bold text-white mb-3">Room4</h1>
            {/* {banana ? banana : 'Waiting fo message...'} */}
            <Hall5 banana={banana} sendPapayaBack={sendPapayaBack} />
        </div>
    )
}
