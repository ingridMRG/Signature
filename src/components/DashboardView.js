import React from 'react';

const DashboardView = ({ documents, onSelectDocument }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">Mis Documentos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map(doc => (
          <div
            key={doc.id}
            className="bg-white rounded-lg shadow-md p-6 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => onSelectDocument(doc.id)}
          >
            <h3 className="text-lg font-medium mb-2">{doc.name}</h3>
            <p className={`text-sm ${doc.status === 'Pendiente' ? 'text-yellow-600' : 'text-green-600'}`}>
              Estado: {doc.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardView;