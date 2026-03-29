import React, { useState } from 'react';
import Navbar from './components/Navbar';
import WorkflowText from './components/WorkflowText';
import WorkflowImage from './components/WorkflowImage';
import './App.css';

function App() {

  const [activeTab, setActiveTab] = useState('text');

  return (
    <div className="App" style={{ minHeight: '100vh', background: '#F9FAFB' }}>
      <Navbar />
      
      <div style={{ maxWidth: '800px', margin: '3rem auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{ color: '#111827', marginBottom: '0.5rem' }}>AI Multimedia Generator</h1>
          <p style={{ color: '#6B7280' }}>Enhance your creativity with Gemini & Stable Diffusion</p>
        </div>

        {/* --- Tab Navigation --- */}
        <div style={{ 
          display: 'flex', 
          background: '#F3F4F6', 
          padding: '5px', 
          borderRadius: '12px', 
          marginBottom: '2rem' 
        }}>
          <button 
            onClick={() => setActiveTab('text')}
            style={{
              flex: 1,
              padding: '12px',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '600',
              transition: '0.3s',
              background: activeTab === 'text' ? 'white' : 'transparent',
              color: activeTab === 'text' ? '#4F46E5' : '#6B7280',
              boxShadow: activeTab === 'text' ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
            }}
          >
            Creative Studio (Text)
          </button>
          <button 
            onClick={() => setActiveTab('image')}
            style={{
              flex: 1,
              padding: '12px',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '600',
              transition: '0.3s',
              background: activeTab === 'image' ? 'white' : 'transparent',
              color: activeTab === 'image' ? '#4F46E5' : '#6B7280',
              boxShadow: activeTab === 'image' ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
            }}
          >
            Style Lab (Image)
          </button>
        </div>

        {/* --- Workflow Content --- */}
        <div style={{ 
          background: 'white', 
          padding: '2rem', 
          borderRadius: '16px', 
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          border: '1px solid #E5E7EB'
        }}>
          {activeTab === 'text' ? <WorkflowText /> : <WorkflowImage />}
        </div>
      </div>

      <footer style={{ textAlign: 'center', padding: '2rem', color: '#9CA3AF', fontSize: '0.875rem' }}>
        © 2026 PearMedia AI Prototype | Built for NxtWave Assignment
      </footer>
    </div>
  );
}

export default App;
