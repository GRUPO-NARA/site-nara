export default function Hero() {
  return (
   
    <main className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden bg-white">
      
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none">
        <svg 
          viewBox="20 15 80 80" 
          className="w-full h-full max-w-[80vw] max-h-[80vh] transition-all duration-500" 
          style={{ opacity: 0.12 }}
        >
          <line x1="50" y1="20" x2="20" y2="55" stroke="#0a0a0a" strokeWidth="0.35" style={{ transition: 'stroke 0.6s, stroke-width 0.6s' }}></line>
          <line x1="50" y1="20" x2="75" y2="50" stroke="#0a0a0a" strokeWidth="0.35" style={{ transition: 'stroke 0.6s, stroke-width 0.6s' }}></line>
          <line x1="50" y1="20" x2="85" y2="25" stroke="#0a0a0a" strokeWidth="0.35" style={{ transition: 'stroke 0.6s, stroke-width 0.6s' }}></line>
          <line x1="20" y1="55" x2="75" y2="50" stroke="#f5a623" strokeWidth="0.9" style={{ transition: 'stroke 0.6s, stroke-width 0.6s' }}></line>
          <line x1="20" y1="55" x2="45" y2="80" stroke="#0a0a0a" strokeWidth="0.35" style={{ transition: 'stroke 0.6s, stroke-width 0.6s' }}></line>
          <line x1="20" y1="55" x2="10" y2="30" stroke="#0a0a0a" strokeWidth="0.35" style={{ transition: 'stroke 0.6s, stroke-width 0.6s' }}></line>
          <line x1="75" y1="50" x2="45" y2="80" stroke="#0a0a0a" strokeWidth="0.35" style={{ transition: 'stroke 0.6s, stroke-width 0.6s' }}></line>
          <line x1="75" y1="50" x2="60" y2="70" stroke="#0a0a0a" strokeWidth="0.35" style={{ transition: 'stroke 0.6s, stroke-width 0.6s' }}></line>
          <line x1="45" y1="80" x2="30" y2="85" stroke="#0a0a0a" strokeWidth="0.35" style={{ transition: 'stroke 0.6s, stroke-width 0.6s' }}></line>
          <line x1="85" y1="25" x2="90" y2="65" stroke="#0a0a0a" strokeWidth="0.35" style={{ transition: 'stroke 0.6s, stroke-width 0.6s' }}></line>
          <line x1="60" y1="70" x2="90" y2="65" stroke="#0a0a0a" strokeWidth="0.35" style={{ transition: 'stroke 0.6s, stroke-width 0.6s' }}></line>
          <line x1="60" y1="70" x2="30" y2="85" stroke="#0a0a0a" strokeWidth="0.35" style={{ transition: 'stroke 0.6s, stroke-width 0.6s' }}></line>
          
          <circle cx="50" cy="20" r="2.4" fill="#f5a623" style={{ transition: 'fill 0.6s' }}></circle>
          <circle cx="20" cy="55" r="1.5" fill="#f5a623" style={{ transition: 'fill 0.6s' }}></circle>
          <circle cx="75" cy="50" r="1.5" fill="#f5a623" style={{ transition: 'fill 0.6s' }}></circle>
          <circle cx="45" cy="80" r="1.5" fill="#0a0a0a" style={{ transition: 'fill 0.6s' }}></circle>
          <circle cx="85" cy="25" r="1.5" fill="#0a0a0a" style={{ transition: 'fill 0.6s' }}></circle>
          <circle cx="10" cy="30" r="1.5" fill="#0a0a0a" style={{ transition: 'fill 0.6s' }}></circle>
          <circle cx="60" cy="70" r="1.5" fill="#0a0a0a" style={{ transition: 'fill 0.6s' }}></circle>
          <circle cx="30" cy="85" r="1.5" fill="#0a0a0a" style={{ transition: 'fill 0.6s' }}></circle>
          <circle cx="90" cy="65" r="1.5" fill="#0a0a0a" style={{ transition: 'fill 0.6s' }}></circle>
        </svg>
      </div>

      <section className="flex flex-col gap-10 px-150 py-20 z-10">
        <article className="flex flex-col gap-5">
          <p className="text-[#ffa928] font-sans text-sm font-semibold">LEA · UEMA · ENGENHARIA DA COMPUTAÇÃO</p>
          <h1 className="text-7xl md:text-9xl text-gray-900 font-sans font-bold">
            <span className="text-[#ffa928]">N</span>úcleo de<br></br>
            <span className="text-[#ffa928]">A</span>nálise e<br></br>
            <span className="text-[#ffa928]">R</span>ecursos <br></br>
            <span className="text-[#ffa928]">A</span>nalíticos
          </h1>
          <p className="text-gray-600 text-xl">Desenvolvemos soluções de software especializadas em ciência de dados, análise preditiva e engenharia de sistemas — integrando pesquisa acadêmica e impacto prático.</p>
        </article>
        
        <nav className="flex gap-5 items-center">
          <a className="bg-[#ffa928] p-3 text-white rounded font-sans font-bold hover:cursor-pointer">Ver Projetos</a>
          <a className="p-3 font-sans font-bold border border-gray-300 rounded hover:cursor-pointer">Sobre o NARA</a>
        </nav>
      </section>
      
    </main>
  );
}
