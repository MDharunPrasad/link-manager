// App.js

import React from 'react';
import './App.css';

function App() {
  const links = [
    { name: 'GitHub', url: 'https://github.com/MDharunPrasad' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/dharun-prasad-m-328974228/' },
    { name: 'Portfolio', url: 'https://dharun-dharunprasadms-projects.vercel.app/' }
  ];

  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url);
  };

  return (
    <div className="container">
      <h1>My Links</h1>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <span className="link-name">{link.name}</span>
            <div>
              <button onClick={() => copyToClipboard(link.url)} className="copy-btn">Copy</button>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                <button className="visit-btn">Visit</button>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;