import Tower2 from './Tower2';

export default function Castle1() {
    return (
        <div className="flex flex-col justify-center items-center pt-10 bg-red-500 w-full">
            <h1 className="text-xl font-bold text-white mb-3">Castle1</h1>
            <Tower2 />
        </div>
    );
}
