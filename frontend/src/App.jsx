import { useState } from 'react';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [goal, setGoal] = useState('clarity');

  const handleOptimize = () => {
    // TODO: Connect to backend API
    console.log('Optimizing:', { prompt, goal });
  };

  return (
    <div className="app">
      <div className="background-glow"></div>

      <header className="header">
        <h1 className="logo">YourPromptSucks</h1>
      </header>

      <main className="main">
        <div className="hero">
          <h2 className="title">
            MAKE YOUR PROMPTS<br />
            <span className="gradient-text">LEGENDARY</span>
          </h2>
          <p className="subtitle">Stop struggling. Optimize instantly.</p>
        </div>

        <div className="card">
          <textarea
            className="prompt-input"
            placeholder="Paste your prompt here..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={8}
          />

          <div className="controls">
            <select
              className="goal-select"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            >
              <option value="clarity">Make it Clear</option>
              <option value="specific">Make it Specific</option>
              <option value="structured">Add Structure</option>
              <option value="creative">Boost Creativity</option>
            </select>

            <button
              className="optimize-btn"
              onClick={handleOptimize}
              disabled={!prompt.trim()}
            >
              🔥 OPTIMIZE
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
