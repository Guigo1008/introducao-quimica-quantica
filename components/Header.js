"use client";

export const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between border-zinc-600 border-b">
      <a href="/">
        <img 
          src={"/hidrogen-atom.png"} 
          width={100}
          alt="Átomo de hidrogênio no modelo atômico de Schrödinger." 
        />
      </a>
      <nav className="flex gap-5 text-white mx-10">
        <a href="/" className="hover:text-yellow-300">Home</a>
        <a href="/resumos" className="hover:text-yellow-300">Resumos</a>
        <a href="/exercicios" className="hover:text-yellow-300">Exercícios</a>
        <a href="/sobre" className="hover:text-yellow-300">Sobre</a>
      </nav>
    </header>
)};