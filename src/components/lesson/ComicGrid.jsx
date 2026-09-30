export default function ComicGrid({ panels }) {
  if (!panels || panels.length === 0) return null;

  return (
    <div className="my-12">
      <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
        <span className="bg-blue-100 text-blue-700 w-10 h-10 rounded-lg flex items-center justify-center mr-3 text-lg">🎨</span>
        Recorregut Visual
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-100 p-6 rounded-3xl border border-slate-200">
        {panels.map((panel, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-sm overflow-hidden flex flex-col group border-2 border-transparent hover:border-blue-400 transition-colors">
            <div className="h-48 md:h-64 overflow-hidden relative bg-slate-200">
              <img 
                src={`/${panel.image}`} 
                alt={`Vinyeta ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlMmU4ZjAiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2NDc0OGIiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkltYXRnZSBubyBkaXNwb25pYmxlPC90ZXh0Pjwvc3ZnPg==';
                }}
              />
            </div>
            <div className="p-5 flex-grow flex items-center">
              <p className="text-slate-700 italic border-l-4 border-blue-500 pl-4">{panel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
