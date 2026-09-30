export default function VideoEmbed({ src, title }) {
  return (
    <div className="w-full bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
      <div className="aspect-video relative">
        {src ? (
          <iframe
            src={src}
            title={title || "Vídeo incrustat"}
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-slate-400">
            <span>El vídeo no està disponible</span>
          </div>
        )}
      </div>
      {title && (
        <div className="bg-slate-800 px-6 py-4">
          <h3 className="text-white font-medium text-lg">{title}</h3>
        </div>
      )}
    </div>
  );
}
