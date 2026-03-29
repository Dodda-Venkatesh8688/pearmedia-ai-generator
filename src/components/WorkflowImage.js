import React, { useState } from 'react';
import { analyzeImage, generateImage } from '../utils/apiHelpers';
import { Upload, Loader2, Sparkles } from 'lucide-react';

const WorkflowImage = () => {
  const [image, setImage] = useState(null);
  const [base64, setBase64] = useState('');
  const [variation, setVariation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(URL.createObjectURL(file));
        setBase64(reader.result.split(',')[1]);
        setStep(2);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProcess = async () => {
    setLoading(true);
    const aiPrompt = await analyzeImage(base64);
    const newImage = await generateImage(aiPrompt);
    setVariation(newImage);
    setLoading(false);
    setStep(3);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <h2 style={{ color: '#1F2937' }}>Style Lab (Image Variation)</h2>
      {step === 1 && (
        <div style={{ border: '2px dashed #D1D5DB', padding: '40px', textAlign: 'center', borderRadius: '12px' }}>
          <input type="file" id="fileIn" hidden onChange={handleUpload} accept="image/*" />
          <label htmlFor="fileIn" style={{ cursor: 'pointer' }}>
            <Upload size={48} color="#4F46E5" />
            <p>Upload image to create variation</p>
          </label>
        </div>
      )}
      {step === 2 && (
        <div style={{ textAlign: 'center' }}>
          <img src={image} alt="Original" style={{ width: '250px', borderRadius: '8px' }} />
          <button onClick={handleProcess} disabled={loading}
            style={{ width: '100%', marginTop: '15px', padding: '12px', background: '#4F46E5', color: 'white', border: 'none', borderRadius: '8px' }}>
            {loading ? <Loader2 className="animate-spin" /> : "Analyze & Generate Variation"}
          </button>
        </div>
      )}
      {step === 3 && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
          <img src={image} alt="Original" style={{ width: '100%', borderRadius: '8px' }} />
          <img src={variation} alt="Variation" style={{ width: '100%', borderRadius: '8px' }} />
          <button onClick={() => setStep(1)} style={{ gridColumn: 'span 2', padding: '10px', background: '#4F46E5', color: 'white', border: 'none', borderRadius: '8px' }}>Try Another</button>
        </div>
      )}
    </div>
  );
};

export default WorkflowImage;