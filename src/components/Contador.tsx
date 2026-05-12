import { useState } from "react"

function Contador() {
    const [contador, setContador] = useState(0)


    return (
        <>
            <main>
                <section>
                    <h1>CountFlow</h1>
                    <p>Acompanhe cada clique em tempo real</p>


                </section>
            </main>
        </>
    )
}

export default Contador;