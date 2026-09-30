import { useState } from 'react';
import { CheckCircle2, RotateCcw, Trophy } from 'lucide-react';

export default function Quiz({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  if (!data || data.length === 0) return null;

  const currentQuestion = data[currentIndex];

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }
    
    if (currentIndex < data.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    const percentage = Math.round((score / data.length) * 100);
    return (
      <div className="bg-white rounded-3xl p-8 md:p-12 text-center border border-slate-200 shadow-sm my-12">
        <div className="w-20 h-20 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Trophy className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-bold text-slate-900 mb-4">Avaluació Completada!</h3>
        <p className="text-xl text-slate-600 mb-8">
          Has respost correctament <span className="font-bold text-purple-700">{score}</span> de <span className="font-bold text-slate-800">{data.length}</span> preguntes.
        </p>
        
        <div className="w-full bg-slate-100 rounded-full h-4 mb-8 overflow-hidden">
          <div 
            className={`h-4 rounded-full ${percentage >= 70 ? 'bg-emerald-500' : percentage >= 50 ? 'bg-amber-500' : 'bg-rose-500'}`} 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        
        <button 
          onClick={handleReset}
          className="inline-flex items-center px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-medium transition-colors"
        >
          <RotateCcw className="w-5 h-5 mr-2" /> Tornar a intentar-ho
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-200 shadow-sm my-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-slate-100">
        <div 
          className="h-1 bg-purple-500 transition-all duration-300" 
          style={{ width: `${(currentIndex / data.length) * 100}%` }}
        ></div>
      </div>
      
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-slate-800 flex items-center">
          <span className="bg-purple-100 text-purple-700 w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">📝</span>
          Test de Coneixements
        </h3>
        <div className="text-sm font-semibold bg-purple-50 text-purple-700 px-4 py-2 rounded-full border border-purple-100">
          Pregunta {currentIndex + 1} de {data.length}
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-xl md:text-2xl font-semibold text-slate-800 mb-8 leading-snug">
          {currentQuestion.question}
        </h4>
        <div className="space-y-4">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectOption(option)}
              className={`w-full text-left p-5 rounded-xl border-2 transition-all flex items-center justify-between ${
                selectedOption === option 
                  ? 'border-purple-500 bg-purple-50 text-purple-900' 
                  : 'border-slate-200 hover:border-purple-300 hover:bg-slate-50 text-slate-700'
              }`}
            >
              <span className="font-medium text-lg">{option}</span>
              {selectedOption === option && <CheckCircle2 className="w-6 h-6 text-purple-600" />}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleNext}
          disabled={!selectedOption}
          className="px-8 py-4 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl font-medium transition-colors"
        >
          {currentIndex === data.length - 1 ? 'Finalitzar Test' : 'Següent Pregunta'}
        </button>
      </div>
    </div>
  );
}
