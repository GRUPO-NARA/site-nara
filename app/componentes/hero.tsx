"use client";
import { irParaSecao } from "../utils/utils";

export default function Hero() {
  return (
   
    <main className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white group">
      
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none select-none">
        <svg 
          viewBox="20 15 80 80" 
          className="w-full h-full max-w-[80vw] max-h-[80vh] transition-all duration-500 opacity-15" 
        >
          <line x1="50" y1="20" x2="20" y2="55" stroke="#0a0a0a" strokeWidth="0.35">
            <animate attributeName="stroke" values="#0a0a0a;#f5a623;#0a0a0a;#0a0a0a" keyTimes="0;0.04;0.083;1" dur="36s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="0.35;1.2;0.35;0.35" keyTimes="0;0.04;0.083;1" dur="36s" begin="0s" repeatCount="indefinite" />
          </line>

          <line x1="20" y1="55" x2="10" y2="30" stroke="#0a0a0a" strokeWidth="0.35">
            <animate attributeName="stroke" values="#0a0a0a;#0a0a0a;#f5a623;#0a0a0a;#0a0a0a" keyTimes="0;0.083;0.125;0.166;1" dur="36s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="0.35;0.35;1.2;0.35;0.35" keyTimes="0;0.083;0.125;0.166;1" dur="36s" begin="0s" repeatCount="indefinite" />
          </line>

          <line x1="20" y1="55" x2="45" y2="80" stroke="#0a0a0a" strokeWidth="0.35">
            <animate attributeName="stroke" values="#0a0a0a;#0a0a0a;#f5a623;#0a0a0a;#0a0a0a" keyTimes="0;0.166;0.208;0.25;1" dur="36s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="0.35;0.35;1.2;0.35;0.35" keyTimes="0;0.166;0.208;0.25;1" dur="36s" begin="0s" repeatCount="indefinite" />
          </line>
          
          <line x1="45" y1="80" x2="30" y2="85" stroke="#0a0a0a" strokeWidth="0.35">
            <animate attributeName="stroke" values="#0a0a0a;#0a0a0a;#f5a623;#0a0a0a;#0a0a0a" keyTimes="0;0.25;0.291;0.333;1" dur="36s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="0.35;0.35;1.2;0.35;0.35" keyTimes="0;0.25;0.291;0.333;1" dur="36s" begin="0s" repeatCount="indefinite" />
          </line>

          <line x1="45" y1="80" x2="75" y2="50" stroke="#0a0a0a" strokeWidth="0.35">
            <animate attributeName="stroke" values="#0a0a0a;#0a0a0a;#f5a623;#0a0a0a;#0a0a0a" keyTimes="0;0.333;0.375;0.416;1" dur="36s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="0.35;0.35;1.2;0.35;0.35" keyTimes="0;0.333;0.375;0.416;1" dur="36s" begin="0s" repeatCount="indefinite" />
          </line>

          <line x1="75" y1="50" x2="50" y2="20" stroke="#0a0a0a" strokeWidth="0.35">
            <animate attributeName="stroke" values="#0a0a0a;#0a0a0a;#f5a623;#0a0a0a;#0a0a0a" keyTimes="0;0.416;0.458;0.50;1" dur="36s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="0.35;0.35;1.2;0.35;0.35" keyTimes="0;0.416;0.458;0.50;1" dur="36s" begin="0s" repeatCount="indefinite" />
          </line>

          <line x1="50" y1="20" x2="75" y2="50" stroke="#0a0a0a" strokeWidth="0.35">
            <animate attributeName="stroke" values="#0a0a0a;#0a0a0a;#f5a623;#0a0a0a;#0a0a0a" keyTimes="0;0.50;0.541;0.583;1" dur="36s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="0.35;0.35;1.2;0.35;0.35" keyTimes="0;0.50;0.541;0.583;1" dur="36s" begin="0s" repeatCount="indefinite" />
          </line>

          <line x1="50" y1="20" x2="85" y2="25" stroke="#0a0a0a" strokeWidth="0.35">
            <animate attributeName="stroke" values="#0a0a0a;#0a0a0a;#f5a623;#0a0a0a;#0a0a0a" keyTimes="0;0.583;0.625;0.666;1" dur="36s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="0.35;0.35;1.2;0.35;0.35" keyTimes="0;0.583;0.625;0.666;1" dur="36s" begin="0s" repeatCount="indefinite" />
          </line>

          <line x1="85" y1="25" x2="90" y2="65" stroke="#0a0a0a" strokeWidth="0.35">
            <animate attributeName="stroke" values="#0a0a0a;#0a0a0a;#f5a623;#0a0a0a;#0a0a0a" keyTimes="0;0.666;0.708;0.75;1" dur="36s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="0.35;0.35;1.2;0.35;0.35" keyTimes="0;0.666;0.708;0.75;1" dur="36s" begin="0s" repeatCount="indefinite" />
          </line>

          <line x1="90" y1="65" x2="60" y2="70" stroke="#0a0a0a" strokeWidth="0.35">
            <animate attributeName="stroke" values="#0a0a0a;#0a0a0a;#f5a623;#0a0a0a;#0a0a0a" keyTimes="0;0.75;0.791;0.833;1" dur="36s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="0.35;0.35;1.2;0.35;0.35" keyTimes="0;0.75;0.791;0.833;1" dur="36s" begin="0s" repeatCount="indefinite" />
          </line>

          <line x1="60" y1="70" x2="30" y2="85" stroke="#0a0a0a" strokeWidth="0.35">
            <animate attributeName="stroke" values="#0a0a0a;#0a0a0a;#f5a623;#0a0a0a;#0a0a0a" keyTimes="0;0.833;0.875;0.916;1" dur="36s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="0.35;0.35;1.2;0.35;0.35" keyTimes="0;0.833;0.875;0.916;1" dur="36s" begin="0s" repeatCount="indefinite" />
          </line>

          <line x1="20" y1="55" x2="75" y2="50" stroke="#0a0a0a" strokeWidth="0.35">
            <animate attributeName="stroke" values="#0a0a0a;#0a0a0a;#f5a623;#0a0a0a" keyTimes="0;0.916;0.958;1" dur="36s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="stroke-width" values="0.35;0.35;1.2;0.35" keyTimes="0;0.916;0.958;1" dur="36s" begin="0s" repeatCount="indefinite" />
          </line>

          <circle cx="50" cy="20" r="2.4">
            <animate attributeName="fill"
              values="#0a0a0a;#f5a623;#0a0a0a;#f5a623;#0a0a0a;#f5a623;#0a0a0a;#f5a623;#0a0a0a;#0a0a0a"
              keyTimes="0;0.04;0.083;0.458;0.5;0.541;0.583;0.625;0.666;1"
              dur="36s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="r"
              values="2.4;3.2;2.4;3.2;2.4;3.2;2.4;3.2;2.4;2.4"
              keyTimes="0;0.04;0.083;0.458;0.5;0.541;0.583;0.625;0.666;1"
              dur="36s" begin="0s" repeatCount="indefinite" />
          </circle>

          <circle cx="20" cy="55" r="1.5">
            <animate attributeName="fill"
              values="#0a0a0a;#f5a623;#0a0a0a;#f5a623;#0a0a0a;#f5a623;#0a0a0a;#0a0a0a;#f5a623;#0a0a0a"
              keyTimes="0;0.04;0.083;0.125;0.166;0.208;0.25;0.916;0.958;1"
              dur="36s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="r"
              values="1.5;2.5;1.5;2.5;1.5;2.5;1.5;1.5;2.5;1.5"
              keyTimes="0;0.04;0.083;0.125;0.166;0.208;0.25;0.916;0.958;1"
              dur="36s" begin="0s" repeatCount="indefinite" />
          </circle>

          <circle cx="10" cy="30" r="1.5">
            <animate attributeName="fill" values="#0a0a0a;#0a0a0a;#f5a623;#0a0a0a;#0a0a0a" keyTimes="0;0.083;0.125;0.166;1" dur="36s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="r" values="1.5;1.5;2.5;1.5;1.5" keyTimes="0;0.083;0.125;0.166;1" dur="36s" begin="0s" repeatCount="indefinite" />
          </circle>

          <circle cx="45" cy="80" r="1.5">
            <animate attributeName="fill"
              values="#0a0a0a;#0a0a0a;#f5a623;#0a0a0a;#f5a623;#0a0a0a;#f5a623;#0a0a0a;#0a0a0a"
              keyTimes="0;0.166;0.208;0.25;0.291;0.333;0.375;0.416;1"
              dur="36s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="r"
              values="1.5;1.5;2.5;1.5;2.5;1.5;2.5;1.5;1.5"
              keyTimes="0;0.166;0.208;0.25;0.291;0.333;0.375;0.416;1"
              dur="36s" begin="0s" repeatCount="indefinite" />
          </circle>

          <circle cx="30" cy="85" r="1.5">
            <animate attributeName="fill"
              values="#0a0a0a;#0a0a0a;#f5a623;#0a0a0a;#0a0a0a;#f5a623;#0a0a0a;#0a0a0a"
              keyTimes="0;0.25;0.291;0.333;0.833;0.875;0.916;1"
              dur="36s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="r"
              values="1.5;1.5;2.5;1.5;1.5;2.5;1.5;1.5"
              keyTimes="0;0.25;0.291;0.333;0.833;0.875;0.916;1"
              dur="36s" begin="0s" repeatCount="indefinite" />
          </circle>

          <circle cx="75" cy="50" r="1.5">
            <animate attributeName="fill"
              values="#0a0a0a;#0a0a0a;#f5a623;#0a0a0a;#f5a623;#0a0a0a;#f5a623;#0a0a0a;#0a0a0a;#f5a623;#0a0a0a"
              keyTimes="0;0.333;0.375;0.416;0.458;0.5;0.541;0.583;0.916;0.958;1"
              dur="36s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="r"
              values="1.5;1.5;2.5;1.5;2.5;1.5;2.5;1.5;1.5;2.5;1.5"
              keyTimes="0;0.333;0.375;0.416;0.458;0.5;0.541;0.583;0.916;0.958;1"
              dur="36s" begin="0s" repeatCount="indefinite" />
          </circle>

          <circle cx="85" cy="25" r="1.5">
            <animate attributeName="fill"
              values="#0a0a0a;#0a0a0a;#f5a623;#0a0a0a;#f5a623;#0a0a0a;#0a0a0a"
              keyTimes="0;0.583;0.625;0.666;0.708;0.75;1"
              dur="36s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="r"
              values="1.5;1.5;2.5;1.5;2.5;1.5;1.5"
              keyTimes="0;0.583;0.625;0.666;0.708;0.75;1"
              dur="36s" begin="0s" repeatCount="indefinite" />
          </circle>

          <circle cx="90" cy="65" r="1.5">
            <animate attributeName="fill"
              values="#0a0a0a;#0a0a0a;#f5a623;#0a0a0a;#f5a623;#0a0a0a;#0a0a0a"
              keyTimes="0;0.666;0.708;0.75;0.791;0.833;1"
              dur="36s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="r"
              values="1.5;1.5;2.5;1.5;2.5;1.5;1.5"
              keyTimes="0;0.666;0.708;0.75;0.791;0.833;1"
              dur="36s" begin="0s" repeatCount="indefinite" />
          </circle>

          <circle cx="60" cy="70" r="1.5">
            <animate attributeName="fill"
              values="#0a0a0a;#0a0a0a;#f5a623;#0a0a0a;#f5a623;#0a0a0a;#0a0a0a"
              keyTimes="0;0.75;0.791;0.833;0.875;0.916;1"
              dur="36s" begin="0s" repeatCount="indefinite" />
            <animate attributeName="r"
              values="1.5;1.5;2.5;1.5;2.5;1.5;1.5"
              keyTimes="0;0.75;0.791;0.833;0.875;0.916;1"
              dur="36s" begin="0s" repeatCount="indefinite" />
          </circle>
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
          <a className="p-3 font-sans font-bold border border-gray-300 rounded hover:cursor-pointer" onClick={() => irParaSecao('sobre')}>Sobre o NARA</a>
        </nav>
      </section>
      
    </main>
  );
}
