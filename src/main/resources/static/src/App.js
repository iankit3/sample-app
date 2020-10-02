import React from 'react';
import './App.css';
import PackageViewer from './pages/PackageViewer';
import PackageProvider from './pages/provider';

function App() {
  return (
    <div className="App">
      <PackageProvider initialState={{}}>
        <PackageViewer />
      </PackageProvider>
    </div>
  );
}

export default App;
