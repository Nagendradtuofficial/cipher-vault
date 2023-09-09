import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';
import { createContext, useState } from 'react';

export const theme_algo_context=createContext(null);

function App() {
  const[text,settext] = useState(null);
  const[key, setkey] = useState(null);
  const[cipher,setcipher] = useState(null);
  const [themeInd , setThemeInd] = useState(0);
  const [algo,setAlgo]=useState(null);

  return (
    <>
     <theme_algo_context.Provider value={{themeInd,setThemeInd,algo,setAlgo,text,settext,key,setkey,cipher,setcipher}}>
     <Header/>
     <Home/>
     <Footer/>
     </theme_algo_context.Provider>
    </>
  );
}

export default App;
