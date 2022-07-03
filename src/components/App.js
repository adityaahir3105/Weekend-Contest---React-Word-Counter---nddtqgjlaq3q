import React,{useState} from 'react'
import '../styles/App.css';
const App = () => {
  const [count,setCount] = useState(0);
  const [charcount,setCharcount] =useState(0);
  const [maxlen, setMaxlen]=useState(50);
  const [size,setSize]=useState(16);

  let change = (e) =>{
    wordcount(e.target.value);
  }

  function wordcount(str){
    let c=0;
    let str1=str.split(" ");
    charCout(str);

    for(let i=0;i<str1.length;i++){
      if(str1.length===0){
        setCount(0);
      }
      if(str1[i]!==""){
        c++;
      }
      setCount(c);
    }
  }

  function charCout(str){
    let c=0;
    for(var i=0;i<str.length;i++){
        c++;
    setCharcount(c);
    }
    let maxNum = (e) => {
      setMaxlen(e.target.value);
    };

    const sizeChanger = (e) => {
      setSize(e.target.value);
    }
  }

  return (
    <div id="main">
      <div >  
        <label>Font Size Picker</label>
        <input id='fontSize-input' defaultValue="16" type="range" min="16" max="32" onChange={sizeChanger}></input>
        <label>Word limit input</label>
        <input defaultValue="50" type="number" onChange={maxNum} id="char-limit-input"></input>
        <br/>
        <textarea
        onChange={change}
        maxLength={maxlen}
        style={{fontSize:`${size}px`}}></textarea>
        <div id="word-counter"> Total Number of words Written:{count}</div>
        <div id="char-length">Total Number of Char count:{charcount}</div>
      </div>
    </div>
  )
}


export default App;
