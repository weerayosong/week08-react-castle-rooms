import { useState } from 'react'

export default function Form() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        alert(`Submitted!\nName: ${formData.name}\nE-mail: ${formData.email}`)
        console.log('ฏata sent:', formData)
    }

    return (
        <div className="flex flex-col items-center mt-10 p-8 w-80 mx-auto">
            <h1 className="text-2xl font-bold text-white mb-6">Form</h1>

            <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-4"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 border border-slate-600 focus:border-transparent transition-all"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 border border-slate-600 focus:border-transparent transition-all"
                />

                <button
                    type="submit"
                    className="w-full bg-slate-600 text-white px-4 py-2 rounded-md font-bold hover:bg-slate-400 active:scale-95 transition-all mt-2"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
