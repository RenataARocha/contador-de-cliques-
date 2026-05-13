import { useState, useEffect } from "react";
import { motion } from "motion/react";

function Contador() {
    const [contador, setContador] = useState(() => {
        const contadorSalvo = localStorage.getItem("contador");

        return contadorSalvo ? Number(contadorSalvo) : 0;
    });

    useEffect(() => {
        localStorage.setItem("contador", String(contador));
    }, [contador]);

    function playClickSound() {
        const audio = new Audio("/click.wav");

        audio.volume = 0.2;

        audio.play();
    }

    function handleIncrementar() {
        playClickSound();
        setContador((prev) => prev + 1);
    }

    function handleDecrementar() {
        playClickSound();
        setContador((prev) => prev - 1);
    }

    function handleReset() {
        playClickSound();
        setContador(0);
    }

    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gray-950">
            <div className="animate-floatGlow absolute top-[-120px] left-[-120px] h-80 w-80 rounded-full bg-purple-700/25 blur-3xl"></div>

            <div className="animate-floatGlowSlow absolute right-[-120px] bottom-[-140px] h-96 w-96 rounded-full bg-blue-700/20 blur-3xl"></div>

            <main className="relative z-10 flex w-full justify-center px-4">
                <motion.section
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut",
                    }}
                    className="flex h-96 w-[90%] max-w-md flex-col items-center justify-center gap-6 rounded-xl border border-gray-900 bg-gray-950 px-8 py-16 shadow-xl shadow-blue-950 backdrop-blur-xl"
                >
                    <header className="flex flex-col items-center gap-1">
                        <h1 className="text-5xl font-light text-stone-50">CountFlow</h1>

                        <p className="text-center text-stone-300">
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
                            damping: 15,
                        }}
                        aria-live="polite"
                        className="my-10 text-8xl font-extrabold tracking-tight text-stone-50 drop-shadow-[0_0_10px_rgba(84,8,128,0.95)]"
                    >
                        {contador}
                    </motion.output>

                    <div
                        role="group"
                        aria-label="Controles do contador"
                        className="flex items-center gap-4"
                    >
                        <button
                            onClick={handleDecrementar}
                            aria-label="Decrementar contador"
                            className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-2xl text-stone-200 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:outline-none active:scale-95"
                        >
                            -
                        </button>

                        <button
                            onClick={handleReset}
                            aria-label="Resetar contador"
                            className="h-10 w-24 cursor-pointer rounded-full border border-white/10 bg-white/5 px-6 font-medium text-stone-100 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-[0_0_18px_rgba(255,255,255,0.12)] focus-visible:ring-2 focus-visible:ring-stone-400 focus-visible:outline-none active:scale-95"
                        >
                            Reset
                        </button>

                        <button
                            onClick={handleIncrementar}
                            aria-label="Incrementar contador"
                            className="h-14 w-14 cursor-pointer rounded-full bg-gray-950 text-2xl text-stone-300 drop-shadow-[0_0_10px_rgba(84,8,128,0.95)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(168,85,247,1)] focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:outline-none active:scale-95"
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
