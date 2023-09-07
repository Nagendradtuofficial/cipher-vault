import React, { useState } from 'react'
import './Header.css'
import Avatar from '@mui/material/Avatar';
import e_img from '../images/encryption_imp.png'
import { Link, Typography } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = () => {

  const [theme,settheme]=useState("");

  const handleChange = (event) => {
    settheme(event.target.value);
  };

  return (
    <div className='header'>
      <div className='top_left'>
        <Avatar alt="Remy Sharp" src={e_img}  sx={{marginRight:'3%',width:'60px',height:'60px'}} />
        <Typography sx={{fontFamily:'sans-serif',fontSize:'25px'}}>
          Cipher-Vault
        </Typography>
      </div>
      <div className='top_center'>
        <Link href="https://github.com/srijansaurabhjha" target='_blank' sx={{marginRight:'2%'}} >
           <GitHubIcon sx={{fontSize:'35px'}}/>
        </Link>
        <Link href="https://github.com/Nagendradtuofficial" target='_blank' >
           <GitHubIcon sx={{fontSize:'35px'}}/>
        </Link>
      </div>
      <div className='top_right'>
      <FormControl sx={{width:'50%'}}>
        <InputLabel id="demo-simple-select-label">Theme</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={theme}
          label="Age"
          onChange={handleChange}
        >
           <MenuItem value={"Asthetic"}>Asthetic</MenuItem>
           <MenuItem value={"Dark"}>Dark</MenuItem>
           <MenuItem value={"Winter"}>Winter</MenuItem>
           <MenuItem value={"Monkai"}>Monkai</MenuItem>
           <MenuItem value={"Drakula"}>Drakula</MenuItem>
        </Select>
      </FormControl>
      </div>
    </div>
  );
}

export default Header

