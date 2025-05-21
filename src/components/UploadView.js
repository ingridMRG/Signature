import React, { useState } from 'react';

const UploadView = ({ onUploadDocument }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setFileName(event.target.files[0]?.name || '');
  };

  const handleUploadClick = () => {
    if (selectedFile) {
      onUploadDocument({
        id: Date.now(), // Simple unique ID
        name: fileName,
        status: 'Pendiente',
        file: selectedFile,
      });
      setSelectedFile(null);
      setFileName('');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-6 text-center">Subir Nuevo Documento</h2>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file-upload">
          Seleccionar Archivo
        </label>
        <input
          type="file"
          id="file-upload"
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-black file:text-white
            hover:file:bg-gray-800 transition-colors"
          onChange={handleFileChange}
        />
        {fileName && <p className="mt-2 text-sm text-gray-600">Archivo seleccionado: {fileName}</p>}
      </div>
      <button
        onClick={handleUploadClick}
        disabled={!selectedFile}
        className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Subir Documento
      </button>
    </div>
  );
};

export default UploadView;