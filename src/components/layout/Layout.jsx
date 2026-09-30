import { Link } from 'react-router-dom';
import { BookOpen, Map, Home, Scroll } from 'lucide-react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center px-2 py-2 text-slate-700 hover:text-blue-600 transition-colors">
                <Home className="w-5 h-5 mr-2" />
                <span className="font-bold text-lg">Història Bíblica</span>
              </Link>
            </div>
            <div className="hidden sm:flex sm:space-x-8">
              <Link to="/biblia" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-600 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors">
                <BookOpen className="w-4 h-4 mr-1" />
                Bíblia
              </Link>
              <Link to="/antic-testament" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-600 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors">
                <Scroll className="w-4 h-4 mr-1" />
                Antic Testament
              </Link>
              <Link to="/nou-testament" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-slate-600 hover:text-blue-600 border-b-2 border-transparent hover:border-blue-600 transition-colors">
                <Map className="w-4 h-4 mr-1" />
                Nou Testament
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-white border-t border-slate-200 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} - Classe de Religió Catòlica ESO. Professor Carles Rivas.</p>
        </div>
      </footer>
    </div>
  );
}
