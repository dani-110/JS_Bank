import mammoth from 'mammoth';
import { useState, useEffect } from 'react';

const DocxViewer = ({ base64 }) => {
  const [htmlContent, setHtmlContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const convert = async () => {
      try {
        setLoading(true);
        
        const base64Data = base64.includes(',') ? base64.split(',')[1] : base64;
        const byteCharacters = atob(base64Data);
        const byteArray = new Uint8Array(byteCharacters.length);

        for (let i = 0; i < byteCharacters.length; i++) {
          byteArray[i] = byteCharacters.charCodeAt(i);
        }

        const { value: html } = await mammoth.convertToHtml({
          arrayBuffer: byteArray.buffer
        });

        setHtmlContent(html);
      } catch (err) {
        setError('Document load nahi hua');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (base64) convert();
  }, [base64]);

  if (loading) return <p>Loading...</p>;
  if (error)   return <p>{error}</p>;

  return (
    <div
      style={{
        width: '100%',
        height: '600px',
        overflow: 'auto',
        padding: '20px 40px',
        background: '#fff',
        border: '1px solid #000',
        borderRadius: '2px',
        boxSizing: 'border-box',
        textAlign: 'left', 
      }}
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};

export default DocxViewer;