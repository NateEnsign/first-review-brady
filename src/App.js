import './App.css';
import React, {useState} from 'react'
import Header from './components/Header'
import Alpha from './components/Alpha'
import Bravo from './components/Bravo'

function App() {
  const [productName, setProductName] = useState("Cup & String")
  
  return (
    <div className="App">
      <Header />
      <h1>Hello World</h1>
      <Alpha setProductName={setProductName} />
      <Bravo name={productName} />
    </div>
  );
}

export default App;
