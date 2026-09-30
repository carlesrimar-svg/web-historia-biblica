import { Link } from 'react-router-dom';
import { Map, BookOpen, Scroll } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center space-y-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
          Benvinguts a l'Aula d'Història Bíblica
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-slate-500">
          Explora les arrels de la fe, els personatges clau i la geografia fascinant on tot va començar.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          <Link to="/biblia" className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md border border-slate-100 transition-all group">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">La Bíblia</h2>
            <p className="text-slate-500">Introducció als llibres sagrats.</p>
          </Link>
          
          <Link to="/antic-testament" className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md border border-slate-100 transition-all group">
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-6 group-hover:scale-110 transition-transform">
              <Scroll className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-slate-800 mb-2">L'Antic Testament</h2>
            <p className="text-slate-500">D'Abraham als Profetes.</p>
          </Link>
          
          <div className="space-y-4">
            <Link to="/nou-testament" className="block bg-white p-8 rounded-2xl shadow-sm hover:shadow-md border border-slate-100 transition-all group">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
                <Map className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">El Nou Testament</h2>
              <p className="text-slate-500">La vida de Jesús i els Apòstols.</p>
            </Link>
            <Link to="/nou-testament/pais-de-jesus" className="block text-sm font-medium text-blue-600 hover:text-blue-800 bg-blue-50 py-3 px-4 rounded-xl transition-colors">
              👉 Lliçó Destacada: El País de Jesús
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
