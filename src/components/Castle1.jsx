import Tower2 from './Tower2'

export default function Castle1() {
    return (
        <div className="flex flex-col justify-center items-center pt-10 bg-red-500 w-full">
            <h1 className="text-xl font-bold text-white mb-3">Castle1</h1>
            {/* <p>⬇️{question ? question : `Waiting for 'question' message...`}</p>

            <p>{papaya ? papaya : `...Waiting for 'answer' reply`}⬆️</p>
            <span className="text-xs text-zinc-600 bg-amber-100 rounded-xs p-2 text-center">
                ข้อมูลใน React ไม่มีการไหลย้อนกลับผ่านทางเดิม (Top-down) |
                ต้องรอ App.jsx ได้รับข้อมูล ค่อยมาแสดงหลอก ๆ อีกครั้ง | setReply
                รีเทิร์นข้ามทุกห้องกลับจาก SecretRoom9 ไปที่ App.jsx เลย
            </span> */}
            <Tower2 />
        </div>
    )
}
