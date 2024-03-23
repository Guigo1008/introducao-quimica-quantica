"use client";
import "../../../app/globals.css"
import { Header } from "../../../components/Header";
import { MathComponent } from "../../../components/MathComponent";

export default function Capitulo1() {
  return (
    <main className="font-serif">
        <Header />
        <div className="m-20">
          <h1 className="text-center m-10 text-4xl">Capítulo 1: Surgimento da Quântica</h1>
          <p className="text-justify my-2 text-lg">Usamos a mecânica quântica para explicar sistemas 
          associados a um certo tamanho (pequeno). A mecânica clássica é determinística,
          é muito simples obter informações a respeito dos sistemas grandes a partir de uma fórmula, 
          mas microscopicamente, funciona-se de forma diferente.</p>
          <p className="text-center bg-yellow-700 p-2 my-4 font-bold font-sans">Mecânica quântica: O mundo é probabilístico;</p>
          <p className="text-justify my-2 text-lg">Existia uma série de fenômenos inexplicáveis segundo
          a mecânica tradicional, por isso, surgiu a necessidade de se criar uma nova ferramenta para
          prever estes eventos.</p>
          <ol className="list-decimal flex flex-col items-center">
            <li>O espectro de absorção do hidrogênio;</li>
            <li>Estrutura atômica;</li>
            <li>Radiação do corpo negro;</li>
            <li>Dualidade onda partícula;</li>
          </ol>
          <div className="text-lg my-5">
              <h3 className="">Modelo Atômico de Bohr:</h3>
              <p>Este representa o início da quântica, com as energias sendo quantizadas e os momentos
              angular e linear (junto ao raio). Dessa forma, têm-se que é o primeiro modelo que é
              matematicamente plausível, apesar de, ao mesmo tempo, só funcionar de forma correta
              para o átomo de hidrogênio.
      
              </p>
          </div>
          <div className="text-lg my-5">
              <h3>Princípio da Incerteza de Heisenberg</h3>
              <p>"Não podemos determinar a posição de uma partícula e o seu momento com precisão simultânea."</p>
              <p>A grande questão neste princípio é que podemos medir e o outro simultaneamente, mas não com precisão</p>
          </div>
        </div>
    </main>
  );
}
