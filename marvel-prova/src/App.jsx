import React, { useState } from 'react';

const MarvelWebsite = () => {
  const [activeHero, setActiveHero] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dados dos heróis
  const heroes = [
    {
      name: "Homem de Ferro",
      title: "Tony Stark",
      description: "Gênio, bilionário, playboy, filantropo. Tony Stark é o Homem de Ferro.",
      stats: { intelligence: 100, strength: 85, speed: 75, durability: 90 }
    },
    {
      name: "Capitão América", 
      title: "Steve Rogers",
      description: "O Primeiro Vingador. Um super-soldado da Segunda Guerra Mundial.",
      stats: { intelligence: 75, strength: 95, speed: 80, durability: 95 }
    },
    {
      name: "Thor",
      title: "Deus do Trovão", 
      description: "Príncipe asgardiano que empunha o poderoso martelo Mjolnir.",
      stats: { intelligence: 70, strength: 100, speed: 85, durability: 100 }
    },
    {
      name: "Homem-Aranha",
      title: "Peter Parker",
      description: "Seu amigo e vizinho Homem-Aranha com grandes poderes.",
      stats: { intelligence: 90, strength: 70, speed: 95, durability: 75 }
    }
  ];

  // Função para rolar até uma seção
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header fixo */}
      <header className="fixed top-0 w-full z-50 bg-black bg-opacity-90 backdrop-blur-sm border-b border-red-600">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div 
            className="text-3xl font-bold text-red-500 cursor-pointer hover:text-red-400"
            onClick={() => scrollToSection('home')}
          >
            MARVEL
          </div>
          
          {/* Menu desktop */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('heroes')} 
              className="hover:text-red-500 transition-colors"
            >
              Heróis
            </button>
            <button 
              onClick={() => scrollToSection('movies')} 
              className="hover:text-red-500 transition-colors"
            >
              Filmes
            </button>
            <button 
              onClick={() => scrollToSection('comics')} 
              className="hover:text-red-500 transition-colors"
            >
              Quadrinhos
            </button>
            <button 
              onClick={() => scrollToSection('news')} 
              className="hover:text-red-500 transition-colors"
            >
              Notícias
            </button>
          </div>

          {/* Botão menu mobile */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-2xl hover:text-red-500"
          >
            ☰
          </button>
        </nav>
      </header>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black bg-opacity-95 md:hidden flex items-center justify-center">
          <div className="text-center space-y-8">
            <button onClick={() => scrollToSection('heroes')} className="block text-2xl hover:text-red-500">
              Heróis
            </button>
            <button onClick={() => scrollToSection('movies')} className="block text-2xl hover:text-red-500">
              Filmes
            </button>
            <button onClick={() => scrollToSection('comics')} className="block text-2xl hover:text-red-500">
              Quadrinhos
            </button>
            <button onClick={() => scrollToSection('news')} className="block text-2xl hover:text-red-500">
              Notícias
            </button>
            <button onClick={() => setIsMenuOpen(false)} className="block text-xl text-gray-400">
              Fechar
            </button>
          </div>
        </div>
      )}

      {/* Seção Hero */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-red-900">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 bg-clip-text text-transparent">
              MARVEL
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Bem-vindo ao Universo dos Heróis
          </p>
          <button 
            onClick={() => scrollToSection('heroes')}
            className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-lg font-semibold transition-colors"
          >
            Explorar Heróis
          </button>
        </div>
      </section>

      {/* Seção Heróis */}
      <section id="heroes" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            Escolha Seu Herói
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Lista de Heróis */}
            <div className="space-y-4">
              {heroes.map((hero, index) => (
                <div
                  key={hero.name}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeHero === index 
                      ? 'bg-red-700 transform translate-x-2' 
                      : 'bg-gray-800 hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveHero(index)}
                >
                  <h3 className="text-2xl font-bold mb-2">{hero.name}</h3>
                  <p className="text-gray-300">{hero.title}</p>
                </div>
              ))}
            </div>
            
            {/* Display do Herói Selecionado */}
            <div className="bg-gradient-to-br from-red-600 to-blue-600 p-8 rounded-xl">
              <div className="text-center mb-8">
                <h3 className="text-4xl font-bold mb-4">{heroes[activeHero].name}</h3>
                <p className="text-lg">{heroes[activeHero].description}</p>
              </div>
              
              {/* Estatísticas */}
              <div className="space-y-4">
                {Object.entries({
                  intelligence: 'Inteligência',
                  strength: 'Força', 
                  speed: 'Velocidade',
                  durability: 'Resistência'
                }).map(([key, label]) => (
                  <div key={key}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{label}</span>
                      <span>{heroes[activeHero].stats[key]}%</span>
                    </div>
                    <div className="w-full bg-black bg-opacity-30 rounded-full h-3">
                      <div 
                        className="bg-yellow-400 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${heroes[activeHero].stats[key]}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Filmes */}
      <section id="movies" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            Universo Cinematográfico Marvel
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fase 5",
                description: "Descubra o próximo capítulo do UCM com histórias épicas.",
                status: "Em desenvolvimento"
              },
              {
                title: "Fase 6", 
                description: "O futuro do UCM promete aventuras grandiosas.",
                status: "Planejamento"
              },
              {
                title: "Projetos Futuros",
                description: "Novos heróis e vilões se preparam para entrar no UCM.",
                status: "Em breve"
              }
            ].map((phase, index) => (
              <div 
                key={phase.title}
                className="bg-gray-800 p-8 rounded-xl hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <h3 className="text-2xl font-bold mb-4 text-red-400">{phase.title}</h3>
                <p className="text-gray-300 mb-6">{phase.description}</p>
                <span className="text-sm text-gray-400">{phase.status}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Quadrinhos */}
      <section id="comics" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            Quadrinhos Marvel
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Vingadores", description: "As histórias mais épicas dos heróis.", color: "text-red-400" },
              { title: "X-Men", description: "Mutantes lutando por um mundo melhor.", color: "text-blue-400" }, 
              { title: "Guardiões", description: "Aventuras cósmicas pelo universo.", color: "text-yellow-400" },
              { title: "Hulk", description: "A fúria verde mais poderosa da Terra.", color: "text-green-400" }
            ].map((comic, index) => (
              <div 
                key={comic.title}
                className="bg-gray-800 p-6 rounded-xl hover:bg-gray-700 transition-colors cursor-pointer"
              >
                <h4 className={`text-xl font-bold mb-2 ${comic.color}`}>{comic.title}</h4>
                <p className="text-gray-300 text-sm">{comic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Notícias */}
      <section id="news" className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            Últimas Notícias
          </h2>
          
          <div className="space-y-6">
            {[
              {
                title: "Novo Filme Marvel em Desenvolvimento",
                date: "Agosto 2025",
                preview: "O próximo capítulo do UCM promete aventuras épicas com novos heróis.",
                color: "border-red-500"
              },
              {
                title: "Atualização das Séries de Quadrinhos", 
                date: "Julho 2025",
                preview: "Descubra as últimas histórias dos seus heróis favoritos.",
                color: "border-blue-500"
              },
              {
                title: "Anúncio de Novos Jogos Marvel",
                date: "Junho 2025", 
                preview: "Prepare-se para experiências de jogos imersivas no universo Marvel.",
                color: "border-yellow-500"
              }
            ].map((article, index) => (
              <article 
                key={article.title}
                className={`bg-gray-800 p-8 rounded-xl border-l-4 ${article.color} hover:bg-gray-700 transition-colors`}
              >
                <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
                <p className="text-gray-400 mb-4">{article.date}</p>
                <p className="text-gray-300">{article.preview}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div 
            className="text-3xl font-bold text-red-500 mb-8 cursor-pointer hover:text-red-400"
            onClick={() => scrollToSection('home')}
          >
            MARVEL
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
              <a 
                key={social}
                href="#" 
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
          
          <p className="text-gray-500">
            © 2025 Marvel Entertainment. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MarvelWebsite;