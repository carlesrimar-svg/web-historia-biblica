import { useState } from 'react';
import { RotateCw, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Flashcards({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  if (!data || data.length === 0) return null;

  const currentCard = data[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % data.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
    }, 150);
  };

  return (
    <div className="my-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <h3 className="text-2xl font-bold text-slate-800 flex items-center">
          <span className="bg-emerald-100 text-emerald-700 w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">🗂️</span>
          Glossari de Conceptes
        </h3>
        <div className="text-sm font-medium bg-slate-100 text-slate-600 px-4 py-2 rounded-full inline-block">
          Targeta {currentIndex + 1} de {data.length}
        </div>
      </div>

      <div className="flex flex-col items-center">
        {/* CSS for 3D flip since standard Tailwind doesn't have preserve-3d by default in v3 without plugins */}
        <style dangerouslySetInnerHTML={{__html: `
          .perspective-1000 { perspective: 1000px; }
          .transform-style-3d { transform-style: preserve-3d; }
          .backface-hidden { backface-visibility: hidden; }
          .rotate-y-180 { transform: rotateY(180deg); }
        `}} />
        
        <div 
          className="w-full max-w-2xl h-80 cursor-pointer perspective-1000"
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div 
            className={`w-full h-full relative transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
          >
            {/* Front */}
            <div className="absolute w-full h-full bg-blue-50 rounded-2xl backface-hidden flex flex-col items-center justify-center p-8 md:p-12 text-center border-2 border-blue-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-blue-500 font-semibold mb-6 tracking-wider uppercase text-sm">Pregunta</span>
              <p className="text-xl md:text-2xl text-slate-800 font-medium leading-relaxed">{currentCard.question}</p>
              <div className="absolute bottom-6 flex items-center text-blue-400 text-sm font-medium">
                <RotateCw className="w-4 h-4 mr-2" />
                Fes clic per girar
              </div>
            </div>
            
            {/* Back */}
            <div className="absolute w-full h-full bg-emerald-50 rounded-2xl backface-hidden rotate-y-180 flex flex-col items-center justify-center p-8 md:p-12 text-center border-2 border-emerald-200 shadow-sm">
              <span className="text-emerald-600 font-semibold mb-6 tracking-wider uppercase text-sm">Resposta</span>
              <p className="text-2xl md:text-3xl text-slate-900 font-bold leading-relaxed">{currentCard.answer}</p>
              <div className="absolute bottom-6 flex items-center text-emerald-500 text-sm font-medium">
                <RotateCw className="w-4 h-4 mr-2" />
                Fes clic per tornar
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <button 
            onClick={handlePrev}
            className="flex items-center px-6 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl font-medium transition-colors shadow-sm"
          >
            <ChevronLeft className="w-5 h-5 mr-1" /> Anterior
          </button>
          <button 
            onClick={handleNext}
            className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors shadow-sm"
          >
            Següent <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
