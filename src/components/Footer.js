import React, { useContext } from 'react'
import './Footer.css';
import colorTheme from './colorSetup';
import { theme_algo_context } from '../App';

const Footer = () => {
  const {themeInd}=useContext(theme_algo_context);
  return (
    <div className='footer' style={{backgroundColor:colorTheme[themeInd].footer_col}}>
      <div style={{color:colorTheme[themeInd].txt_col}}>© V V S D Nagendra Anala</div>
      <div style={{color:colorTheme[themeInd].txt_col}}>© Srijan Saurabh Jha</div>
    </div>
  );
}

export default Footer