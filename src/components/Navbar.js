import React from 'react';
import { Lightbulb } from 'lucide-react';

const Navbar = () => {
  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      padding: '1rem 2rem', 
      background: '#4F46E5', 
      color: 'white',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Lightbulb size={28} />
        <h1 style={{ margin: 0, fontSize: '1.5rem' }}>PearMedia AI Lab</h1>
      </div>
      <div>
        <span style={{ fontSize: '0.9rem', opacity: 0.8 }}>AI Prototype v1.0</span>
      </div>
    </nav>
  );
};

export default Navbar;