import React, { useState } from 'react';
import { enhancePrompt, generateImage } from '../utils/apiHelpers';
import { Sparkles, Image as ImageIcon, Loader2 } from 'lucide-react';

const WorkflowText = () => {
  const [userInput, setUserInput] = useState('');
  const [enhancedText, setEnhancedText] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); 

  const handleEnhance = async () => {
    if (!userInput) return alert("Please enter a prompt!");
    setLoading(true);
    const result = await enhancePrompt(userInput);
    setEnhancedText(result);
    setLoading(false);
    setStep(2);
  };

  const handleGenerate = async () => {
    setLoading(true);
    const imageUrl = await generateImage(enhancedText);
    setGeneratedImage(imageUrl);
    setLoading(false);
    setStep(3);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h2 style={{ color: '#1F2937' }}>Creative Studio (Text)</h2>
      
      {step === 1 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <textarea 
            placeholder="Describe what you want to create..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            style={{ height: '100px', padding: '12px', borderRadius: '8px', border: '1px solid #D1D5DB' }}
          />
          <button onClick={handleEnhance} disabled={loading}
            style={{ padding: '12px', background: '#4F46E5', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
            {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={18} />}
            Enhance Prompt
          </button>
        </div>
      )}

      {step === 2 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <label style={{ fontWeight: 'bold' }}>Enhanced Prompt (Edit if needed):</label>
          <textarea value={enhancedText} onChange={(e) => setEnhancedText(e.target.value)}
            style={{ height: '150px', padding: '12px', borderRadius: '8px', border: '1px solid #4F46E5' }}
          />
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => setStep(1)} style={{ flex: 1, padding: '12px', background: '#E5E7EB', border: 'none', borderRadius: '8px' }}>Back</button>
            <button onClick={handleGenerate} disabled={loading}
              style={{ flex: 2, padding: '12px', background: '#10B981', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
              {loading ? <Loader2 className="animate-spin" /> : <ImageIcon size={18} />}
              Generate Image
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div style={{ textAlign: 'center' }}>
          {generatedImage ? <img src={generatedImage} alt="AI Result" style={{ maxWidth: '100%', borderRadius: '12px' }} /> : <p>Loading failed...</p>}
          <button onClick={() => {setStep(1); setUserInput(''); setGeneratedImage(null);}}
            style={{ marginTop: '20px', padding: '10px 20px', background: '#4F46E5', color: 'white', border: 'none', borderRadius: '8px' }}>New Design</button>
        </div>
      )}
    </div>
  );
};

export default WorkflowText;