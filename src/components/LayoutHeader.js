import React from 'react';

const LayoutHeader = ({ onNavigate }) => {
  return (
    <header className="bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">SignFlow</h1>
      <nav>
        <button
          onClick={() => onNavigate('dashboard')}
          className="mr-4 text-gray-600 hover:text-gray-900 transition-colors"
        >
          Dashboard
        </button>
        <button
          onClick={() => onNavigate('upload')}
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          Subir Documento
        </button>
      </nav>
    </header>
  );
};

export default LayoutHeader;