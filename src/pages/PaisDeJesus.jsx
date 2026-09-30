import { useState, useEffect } from 'react';
import VideoEmbed from '../components/lesson/VideoEmbed';
import ComicGrid from '../components/lesson/ComicGrid';
import Flashcards from '../components/interactive/Flashcards';
import Quiz from '../components/interactive/Quiz';

// Fallback data in case fetch fails
import lessonContentData from '../data/lessonContent.json';
import flashcardsDataJSON from '../data/flashcardsData.json';
import quizDataJSON from '../data/quizData.json';

export default function PaisDeJesus() {
  const [content, setContent] = useState(null);
  const [flashcards, setFlashcards] = useState([]);
  const [quiz, setQuiz] = useState([]);

  useEffect(() => {
    // In a real app we could fetch these, but since we're using a bundler (Vite)
    // and they are local JSON files, we can just use the imported data directly.
    setContent(lessonContentData);
    setFlashcards(flashcardsDataJSON);
    setQuiz(quizDataJSON);
  }, []);

  if (!content) {
    return <div className="min-h-screen flex items-center justify-center">Carregant contingut...</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Capçalera */}
      <header className="mb-12 text-center">
        <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">Unitat 3</span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-4">
          {content.title}
        </h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto">
          {content.subtitle}
        </p>
      </header>

      {/* Contingut Textual */}
      <div className="prose prose-lg prose-blue max-w-none mb-16 space-y-12">
        {content.sections.map((section, idx) => (
          <section key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b-2 border-slate-100">
              {section.heading}
            </h2>
            <p className="text-slate-700 leading-relaxed text-lg">
              {section.text}
            </p>
          </section>
        ))}
      </div>

      {/* Còmic / Galeria */}
      <ComicGrid panels={content.comic} />

      {/* Flashcards */}
      <Flashcards data={flashcards} />

      {/* Avaluació */}
      <Quiz data={quiz} />
    </div>
  );
}
