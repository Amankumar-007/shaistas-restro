// components/PdfShowSimple.jsx
import React from 'react';

const PdfShowSimple = ({ fileUrl }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-50">
      <div className="w-full max-w-4xl h-[80vh] border-2 border-orange-600 rounded-lg overflow-hidden shadow-2xl">
        <iframe
          src={`${fileUrl}#toolbar=0`} // toolbar=0 hides the print/download bar in some browsers
          type="application/pdf"
          width="100%"
          height="100%"
          title="Menu PDF"
        />
      </div>
    </div>
  );
};

export default PdfShowSimple;