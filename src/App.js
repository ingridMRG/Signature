import React, { useState, useEffect } from 'react';
import LayoutHeader from './components/LayoutHeader';
import DashboardView from './components/DashboardView';
import UploadView from './components/UploadView';
import DocumentView from './components/DocumentView';
import { initialDocuments } from './mock/documents';

const App = () => {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [documents, setDocuments] = useState(() => {
    const savedDocuments = localStorage.getItem('documents');
    return savedDocuments ? JSON.parse(savedDocuments) : initialDocuments;
  });
  const [selectedDocumentId, setSelectedDocumentId] = useState(null);

  useEffect(() => {
    localStorage.setItem('documents', JSON.stringify(documents));
  }, [documents]);

  const handleNavigate = (page) => {
    setCurrentPage(page);
    if (page !== 'document') {
      setSelectedDocumentId(null);
    }
  };

  const handleUploadDocument = (newDocument) => {
    setDocuments([...documents, newDocument]);
    setCurrentPage('dashboard');
  };

  const handleSelectDocument = (id) => {
    setSelectedDocumentId(id);
    setCurrentPage('document');
  };

  const handleSignDocument = (id, signature) => {
    setDocuments(documents.map(doc =>
      doc.id === id ? { ...doc, status: 'Firmado', signedBy: signature } : doc
    ));
    // Opcional: volver al dashboard después de firmar
    // setCurrentPage('dashboard');
  };

  const selectedDocument = documents.find(doc => doc.id === selectedDocumentId);

  return (
    <div className="min-h-screen bg-gray-100">
      <LayoutHeader onNavigate={handleNavigate} />
      <main>
        {currentPage === 'dashboard' && (
          <DashboardView documents={documents} onSelectDocument={handleSelectDocument} />
        )}
        {currentPage === 'upload' && (
          <UploadView onUploadDocument={handleUploadDocument} />
        )}
        {currentPage === 'document' && (
          <DocumentView
            document={selectedDocument}
            onBackToDashboard={() => handleNavigate('dashboard')}
            onSignDocument={handleSignDocument}
          />
        )}
      </main>
    </div>
  );
};

export default App;

// DONE