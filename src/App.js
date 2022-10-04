
import './App.css';
import { useState } from 'react';

function App() {
  const [txt, setTxt] = useState('test')
  return (
    <div className="App">
      {txt}
      <button onClick={() => {
        setTxt((prev) => { return prev + 'I' })
      }}>Button</button>
    </div>
  );
}

export default App;
