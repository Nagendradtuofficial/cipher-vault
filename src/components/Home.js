import React from 'react'
import './Home.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Home = () => {
  return (
    <div className='home'>
        <div className='select-algo'>
            select-algo
        </div>

        <div className='top'>
            <div className='input'>
                <TextField  sx = {{width: '100%' ,  "& fieldset": { border: 'none' } ,backgroundColor: 'lightblue'}}rows = {6} multiline
                    id="demo-helper-text-misaligned"
                    label="Enter Input"
                />
                <TextField  sx = {{width: '100%', "& fieldset": { border: 'none'} , backgroundColor: 'olive'}}rows = {3} multiline
                    id="demo-helper-text-misaligned"
                    label="Enter key"
                />

            </div>

            <div className='output'>
                output ;
            </div>
        </div>

        <div className='bottom'>
            <Button variant="contained" sx = {{marginBottom: '2pc' , marginTop: '3pc'}}>Encrypt</Button>
            <Button variant="contained">Decrypt</Button>
        </div>
    </div>
  );
}

export default Home