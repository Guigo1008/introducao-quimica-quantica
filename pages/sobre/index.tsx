"use client";
import "../../app/globals.css"
import { Header } from "../../components/Header";
import { MathComponent } from "../../components/MathComponent";

export default function Sobre() {
    return (
        <main className="font-serif">
            <Header />
            <div className="mx-20">
                <h1 className="text-center my-8 mb-10 text-4xl">Sobre</h1>
                <p className="text-justify my-4 text-lg">Este site foi criado com o intuito de ser meu caderno de anotações da matéria de Introdução
                à Química Quântica, ministrada pela professora Grazieli. Aqui você encontrará os principais conceitos da disciplina e as formas que utilizei
                para anotar tudo. Espero que você goste!</p>

                <div className="flex items-center justify-around">
                    <div className="flex flex-col gap-3 my-5">
                        <h3 className="text-2xl">1. Avaliações:</h3>
                        <ul className="list-disc flex flex-col text-lg gap-2 items-baseline">
                            <li>P1: 28/05/2024;</li>
                            <li>P2: 11/07/2024;</li>
                            <li>2ª Chamada: 18/07/2024;</li>
                        </ul>
                    </div>

                    
                    <div className="flex flex-col gap-3 my-5">
                        <h3 className="text-2xl">2. Contato:</h3>
                        <ul className="list-disc flex flex-col text-lg gap-2 items-baseline">
                            <li>Email: grazielisimoes@iq.ufrj.br;</li>
                            <li>Sala: A404 ou A401 (Mezanino);</li>
                            <li>Lembrar de agendar a visita antes;</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col justify-around gap-3 my-10 items-center">
                    <h3 className="text-2xl">3. Referências bibliográficas:</h3>
                    <ul className="list-disc flex flex-col text-lg gap-2 items-baseline">
                        <li>Levine: Demonstra tudo, mas linguagem complicada;</li>
                        <li>David Ball: Didático, mas não é específico de quântica;</li>
                        <li>Griffings;</li>
                        <li>Atkins: Não é tão bom, recomenda-se o de fisico-química;</li>
                    </ul>
                </div>
                <p className="text-center italic text-sm my-10">No mais, muito boa sorte!</p>
            </div>

        </main>
)};
