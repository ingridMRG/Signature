import React, { useState, useEffect } from 'react';

const DocumentView = ({ document, onBackToDashboard, onSignDocument }) => {
  const [signature, setSignature] = useState('');
  const [documentPlaceholder, setDocumentPlaceholder] = useState(null);

  useEffect(() => {
    if (document && document.file) {
      // Simulación de visualización del documento
      // Como no podemos leer el PDF directamente, simularemos una representación visual.
      // Podríamos generar un patrón o un texto genérico que parezca contenido.
      setDocumentPlaceholder(`Visualización simulada de: ${document.file.name}\n\nEste es un espacio para mostrar el contenido del documento.\n\nDebido a las restricciones, no podemos renderizar el PDF real aquí.\n\n--- Contenido Genérico ---\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
    } else {
      setDocumentPlaceholder(null);
    }
  }, [document]);

  const handleSignClick = () => {
    if (signature.trim()) {
      onSignDocument(document.id, signature);
    }
  };

  if (!document) {
    return (
      <div className="p-6 text-center text-gray-600">
        Selecciona un documento para ver.
      </div>
    );
  }

  return (
    <div className="p-6">
      <button
        onClick={onBackToDashboard}
        className="mb-4 text-black hover:underline transition-colors"
      >
        &larr; Volver al Dashboard
      </button>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">{document.name}</h2>
        <p className={`text-sm mb-4 ${document.status === 'Pendiente' ? 'text-yellow-600' : 'text-green-600'}`}>
          Estado: {document.status}
        </p>

        {/* Simulación de visualización del documento */}
        <div className="border border-gray-300 p-4 mb-6 h-64 overflow-y-auto bg-gray-50 whitespace-pre-wrap text-sm text-gray-700">
          {documentPlaceholder ? documentPlaceholder : 'Cargando visualización simulada...'}
        </div>

        {document.status === 'Pendiente' && (
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="signature">
              Firma Digital
            </label>
            <input
              type="text"
              id="signature"
              value={signature}
              onChange={(e) => setSignature(e.target.value)}
              placeholder="Escribe tu nombre completo para firmar"
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black transition"
            />
            <button
              onClick={handleSignClick}
              disabled={!signature.trim()}
              className="w-full mt-3 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Firmar Documento
            </button>
          </div>
        )}

        {document.status === 'Firmado' && (
          <div className="mt-4 text-green-700 font-semibold">
            Documento firmado por: {document.signedBy}
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentView;

// DONE