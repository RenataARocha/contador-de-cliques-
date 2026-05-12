import { useState } from "react"

function Contador() {
    const [contador, setContador] = useState(0)

    function handleIncrementar() {
        setContador(contador + 1)
    }

    function handleDecrementar() {
        setContador(contador - 1)
    }

    function handleReset() {
        setContador(0)
    }

    return (
        <div className="bg-gray-950 min-h-screen flex justify-center items-center">
            <main className="w-full px-4 flex justify-center">
                <section className="bg-gray-950 w-full max-w-md h-90 rounded-xl px-8 py-16 flex flex-col items-center justify-center border border-gray-900 shadow-blue-950 shadow-xl gap-6">

                    <div className="flex flex-col items-center gap-1">
                        <h1 className="text-stone-50 text-5xl font-light">
                            CountFlow
                        </h1>

                        <p className="text-stone-300 text-center">
                            Acompanhe cada clique em tempo real
                        </p>
                    </div>

                    <span className="text-stone-50 text-8xl font-extrabold tracking-tight my-10 drop-shadow-[0_0_10px_rgba(84,8,128,0.95)]">
                        {contador}
                    </span>

                    <div className="flex gap-4 items-center">
                        <button
                            onClick={handleDecrementar}
                            className="text-stone-300 bg-gray-900 rounded-full w-14 h-14 border border-olive-800 text-2xl"
                        >
                            -
                        </button>

                        <button
                            onClick={handleReset}
                            className="text-sky-50 px-8 w-23 h-10 border border-olive-700 rounded-full"
                        >
                            Reset
                        </button>

                        <button
                            onClick={handleIncrementar}
                            className="text-stone-300 bg-gray-950 rounded-full w-14 h-14 text-2xl drop-shadow-[0_0_10px_rgba(84,8,128,0.95)]"
                        >
                            +
                        </button>
                    </div>

                </section>
            </main>
        </div>
    )
}

export default Contador