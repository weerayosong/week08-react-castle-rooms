import Chamber3 from './Chamber3';

export default function Tower2({ banana, sendPapayaBack }) {
    return (
        <div className="flex flex-col justify-center items-center pt-10 bg-orange-500 w-[90%]">
            <h1 className="text-xl font-bold text-white mb-3">Tower2</h1>

            <Chamber3 banana={banana} sendPapayaBack={sendPapayaBack} />
        </div>
    );
}
