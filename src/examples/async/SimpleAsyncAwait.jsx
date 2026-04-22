import { useState, useEffect } from 'react';

export default function PokemonList() {
    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                // 1. Use pokemon-simple-API
                const res = await fetch(
                    'https://pokemon-simple.vercel.app/api/pokemon/?limit=151',
                );
                const data = await res.json();

                // 2. API >> []
                setPokemonList(data);
            } catch (error) {
                console.error(`can't fetch:`, error);
            } finally {
                setIsLoading(false);
            }
        };

        getData();
    }, []);

    return (
        <div className="p-6 bg-gray-800 min-h-screen text-white">
            <h2 className="text-3xl font-bold text-yellow-300 text-center mb-6">
                I 💖 151 Pokemon Gen 1
            </h2>

            {isLoading ? (
                <p className="text-center text-xl">Catching them all... 😈</p>
            ) : (
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4">
                    {/* 3. pokemon.id จาก API ได้เลย */}
                    {pokemonList.map((pokemon) => {
                        return (
                            <div
                                // id simple
                                key={pokemon.id}
                                className="flex flex-col items-center p-4 bg-lime-700 rounded-xl hover:bg-lime-400 transition duration-300"
                            >
                                <img
                                    // เรียกใช้ pokemon.image จาก API ได้เลย
                                    src={pokemon.image}
                                    alt={pokemon.name}
                                    className="w-24 h-24 drop-shadow-md"
                                />
                                <span className="text-gray-400 text-sm mt-1">
                                    {/* เรียกใช้ pokemon.id จาก API ได้เลย */}#
                                    {pokemon.id}
                                </span>
                                <p className="capitalize font-semibold text-lg">
                                    {pokemon.name}
                                </p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
