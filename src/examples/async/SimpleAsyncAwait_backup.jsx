import { useState, useEffect } from 'react';

export default function SimpleAsyncAwait() {
    const [name, setName] = useState('Loading...');
    const [image, setImage] = useState('');

    useEffect(() => {
        const getData = async () => {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon/25');
            const data = await res.json();
            setName(data.name);
            setImage(data.sprites.front_default);
        };

        getData();
    }, []);

    // useEffect(() => {
    //     fetch('https://pokeapi.co/api/v2/pokemon/1')
    //         .then((res) => res.json())
    //         .then((data) => setName(data.name));
    // }, []);

    return (
        <div className="flex flex-col items-center gap-2 p-6 bg-gray-800 text-white rounded-xl">
            <h2 className="text-xl font-bold text-yellow-300">
                Simple async/await
            </h2>
            {/* render {image} when {image} is truthy only */}
            {image && (
                <img
                    src={image}
                    alt={name}
                    className="w-32 h-32 drop-shadow-md bg-linear-to-br from-lime-100 to-lime-300 rounded-md border-slate-600/50 border-2"
                />
            )}
            <p className="capitalize text-2xl">{name}</p>
        </div>
    );
}
