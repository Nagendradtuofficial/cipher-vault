import React, { useContext, useState } from 'react'
import './Header.css'
import Avatar from '@mui/material/Avatar';
import e_img from '../images/encryption_imp.png'
import { Link, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import GitHubIcon from '@mui/icons-material/GitHub';
import { theme_algo_context } from '../App';
import colorTheme from './colorSetup';

const Header = () => {

  const [val,setVal]=useState("");
  const {themeInd,setThemeInd}=useContext(theme_algo_context);

  const handleChange = (event) => {
    setVal(event.target.value);
    setThemeInd(event.target.value);
  };

  return (
    <div className='header' style={{backgroundColor:colorTheme[themeInd].header_col}}>
        <a className='top_left' href= ''>
            <Avatar alt="Remy Sharp" src={e_img}  sx={{marginRight:'3%',width:'60px',height:'60px',mixBlendMode: 'inherit'}} />
            <Typography sx={{fontFamily:'Lora',fontSize:'25px',color:colorTheme[themeInd].txt_col}}>
              Cipher-Vault
            </Typography>
        </a>
      <div className='top_center'>
        <Link href="https://github.com/srijansaurabhjha" target='_blank' sx={{marginRight:'2%',color:colorTheme[themeInd].txt_col}} >
           <GitHubIcon sx={{fontSize:'35px'}}/>
        </Link>
        <Link href="https://github.com/Nagendradtuofficial" target='_blank' >
           <GitHubIcon sx={{fontSize:'35px',color:colorTheme[themeInd].txt_col}}/>
        </Link>
      </div>
      <div className='top_right'>
      <FormControl sx={{width:'50%',backgroundColor:colorTheme[themeInd].theme_box}}>
        <InputLabel id="demo-simple-select-label">Theme</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={val}
          // label="Age"
          onChange={handleChange}
        >
           <MenuItem value={1}>Asthetic</MenuItem>
           <MenuItem value={2}>Dark</MenuItem>
           <MenuItem value={3}>Winter</MenuItem>
           <MenuItem value={4}>Forest</MenuItem>
           <MenuItem value={5}>Drakula</MenuItem>
        </Select>
      </FormControl>
      </div>
    </div>
  );
}

export default Header