import Image from "next/image";
import { MathComponent } from "../components/MathComponent"; 
import { Header } from "../components/Header";

export default function Home() {

  return (
    <main className="flex gap-5 flex-col">
      <Header />
      <div className="flex gap-32">
        <aside className="flex flex-col gap-4 px-10 pr-40 items-center justify-start">
          <h3 className="text-2xl font-serif">Capítulos</h3>
          <a href="/capitulos/capitulo1" className=" text-lg font-thin hover:text-yellow-300">
            Capítulo 1
          </a>
          <a href="/capitulos/capitulo2" className="text-lg font-thin hover:text-yellow-300">
            Capítulo 2
          </a>
          <a href="/capitulos/capitulo3" className="text-lg font-thin hover:text-yellow-300">
            Capítulo 3
          </a>
          <a href="/capitulos/capitulo4" className="text-lg font-thin hover:text-yellow-300">
            Capítulo 4
          </a>
          <a href="/capitulos/capitulo5" className="text-lg font-thin hover:text-yellow-300">
            Capítulo 5
          </a>
          <a href="/capitulos/capitulo6" className="text-lg font-thin hover:text-yellow-300">
            Capítulo 6
          </a>
        </aside>
        <div className="flex flex-col items-center gap-5">
          <h1 className="text-4xl text-center font-serif " >Química Quântica</h1>
          <p className="text-center text-lg font-thin mx-5">Seja bem vindo ao site com toda a matéria da professora Grazieli</p>
          <Image 
            src={"/rutterford_model.gif"}
            alt="Modelo atômico de Rutterford" 
            width={500} height={500}
            className="m-2 "
            unoptimized  
          />
          <span><MathComponent equation={"E = mc^2"}/></span>
          <span><MathComponent equation={"E = h \\nu"}/></span>
          <span><MathComponent 
          equation={"\\Psi(r, \\theta, \\psi) = R(r) \\cdot \\Theta(\\theta) \\cdot \\Phi(\\psi) = R_{nl}(r) \\cdot Y_{lm}(\\theta, \\phi)"}/></span>
        </div>   
      </div>
    </main>
  );
}
