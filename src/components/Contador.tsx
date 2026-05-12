import { useState, useEffect } from "react";
import { motion } from "motion/react"

function Contador() {
    const [contador, setContador] = useState(() => {
        const contadorSalvo = localStorage.getItem("contador");

        return contadorSalvo ? Number(contadorSalvo) : 0;
    });

    useEffect(() => {
        localStorage.setItem("contador", String(contador));
    }, [contador]);

    function handleIncrementar() {
        setContador((prev) => prev + 1);
    }

    function handleDecrementar() {
        setContador((prev) => prev - 1);
    }

    function handleReset() {
        setContador(0);
    }

    return (
        <div className="relative bg-gray-950 min-h-screen flex justify-center items-center overflow-hidden">
            <div className="absolute top-[-120px] left-[-120px] w-80 h-80 bg-purple-700/25 rounded-full blur-3xl animate-floatGlow"></div>

            <div className="absolute bottom-[-140px] right-[-120px] w-96 h-96 bg-blue-700/20 rounded-full blur-3xl animate-floatGlowSlow"></div>

            <main className="relative z-10 w-full px-4 flex justify-center">
                <motion.section
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut"
                    }} className="bg-gray-950 backdrop-blur-xl w-full max-w-md h-90 rounded-xl px-8 py-16 flex flex-col items-center justify-center border border-gray-900 shadow-blue-950 shadow-xl gap-6">
                    <header className="flex flex-col items-center gap-1">
                        <h1 className="text-stone-50 text-5xl font-light">CountFlow</h1>

                        <p className="text-stone-300 text-center">
                            Acompanhe cada clique em tempo real
                        </p>
                    </header>

                    <motion.output
                        key={contador}
                        initial={{ scale: 0.7, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 15
                        }}
                        aria-live="polite"
                        className="text-stone-50 text-8xl font-extrabold tracking-tight my-10 drop-shadow-[0_0_10px_rgba(84,8,128,0.95)]"
                    >
                        {contador}
                    </motion.output>

                    <div
                        role="group"
                        aria-label="Controles do contador"
                        className="flex gap-4 items-center"
                    >
                        <button
                            onClick={handleDecrementar}
                            aria-label="Decrementar contador"
                            className="
    text-stone-300
    bg-gray-900
    hover:bg-gray-800
    rounded-full
    w-14
    h-14
    border
    border-olive-800
    text-2xl
    cursor-pointer
    transition-all
    duration-300

    hover:scale-110
    hover:shadow-[0_0_20px_rgba(163,163,163,0.35)]

    active:scale-95

    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-stone-500
    "
                        >
                            -
                        </button>

                        <button
                            onClick={handleReset}
                            aria-label="Resetar contador"
                            className="
    text-sky-50
    px-8
    w-24
    h-10
    border
    border-olive-700
    hover:bg-slate-900
    rounded-full
    cursor-pointer
    font-medium
    transition-all
    duration-300

    hover:scale-105
    hover:shadow-[0_0_18px_rgba(120,120,120,0.25)]

    active:scale-95

    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-slate-400
    "
                        >
                            Reset
                        </button>

                        <button
                            onClick={handleIncrementar}
                            aria-label="Incrementar contador"
                            className="
    text-stone-300
    bg-gray-950
    rounded-full
    w-14
    h-14
    text-2xl
    cursor-pointer
    transition-all
    duration-300

    drop-shadow-[0_0_10px_rgba(84,8,128,0.95)]

    hover:scale-110
    hover:shadow-[0_0_25px_rgba(168,85,247,1)]

    active:scale-95

    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-purple-500
    "
                        >
                            +
                        </button>
                    </div>
                </motion.section>
            </main>
        </div>

    );
}

export default Contador;
