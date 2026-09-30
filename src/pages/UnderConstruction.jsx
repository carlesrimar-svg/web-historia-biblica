import { Construction } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function UnderConstruction() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mb-6">
        <Construction className="w-10 h-10" />
      </div>
      <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Pàgina en Construcció</h1>
      <p className="text-lg text-slate-500 max-w-md mx-auto mb-8">
        Estem treballant en aquests materials per oferir-te els millors continguts ben aviat.
      </p>
      <Link to="/" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm">
        Tornar a l'inici
      </Link>
    </div>
  );
}
