import { useState, useEffect } from 'react';

export default function PokemonList() {
    // 1.  useState 151 pokemon Gen1 as Array
    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                // 2. useEffect ?limit=151
                const res = await fetch(
                    'https://pokeapi.co/api/v2/pokemon?limit=151',
                );
                const data = await res.json();

                // data.results
                setPokemonList(data.results);
            } catch (error) {
                console.error(`can't fetch:`, error);
            } finally {
                setIsLoading(false); // toggle isLoading to false; it's complete!
            }
        };

        getData();
    }, []);

    return (
        <div className="p-6 bg-gray-800 min-h-screen text-white">
            <h2 className="text-3xl font-bold text-yellow-300 text-center mb-6">
                I 💖 151 Pokemon Gen 1
            </h2>

            {/* 3. check (useState) of Loading */}
            {isLoading ? (
                <p className="text-center text-xl">Catching them all... 😈</p>
            ) : (
                /* 4. Grid L6 M4 S3 2  */
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {/* 5. map out 151 pokemon 0-150 */}
                    {pokemonList.map((pokemon, index) => {
                        // console.log(index);
                        // ID 1-151
                        const pokeId = index + 1;

                        // not fetch images >> use image url with ${pokeId}
                        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`;

                        return (
                            <div
                                key={pokemon.name}
                                className="flex flex-col items-center p-4 bg-lime-700 rounded-xl hover:bg-lime-400 transition duration-300"
                            >
                                <img
                                    src={imageUrl}
                                    alt={pokemon.name}
                                    className="w-24 h-24 drop-shadow-md"
                                />
                                <span className="text-gray-400 text-sm mt-1">
                                    #{pokeId}
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
