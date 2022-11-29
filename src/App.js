import React,{ useState } from 'react';
import './App.css';

function App() {

  const [metin,setMetin]=useState( {text:'Garajdaki Araba Sayısı '} )
  const [arabaSayisi,arabaSayisiGüncelle]=useState(0)

  const arac=()=>{
    setMetin({
      text:'Garaja Giren Araba Sayısı'
    })

    arabaSayisiGüncelle(arabaSayisi +1)
  }

  return (
    <div className="App">
      <h4>{metin.text}</h4>
      <h2>{arabaSayisi}</h2>

      <button onClick={arac}>Araç Ekle</button>
    </div>
  );
}

export default App;
