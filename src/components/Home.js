import React , {useState}from 'react'
import './Home.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Algo from './Algo';

const Home = () => {

    const[text,settext] = useState(null);
    const[key, setkey] = useState(null);
    const[cipher,setcipher] = useState(null);

    const isNumber = (a) => {
        if(a >= '0' && a <= '9')
            return true ;
        return false ;
    }

    
  return (
    <div className='home'>
        <div className='select-algo'>
            <Algo/>
        </div>

        <div className='top'>
            <div className='input'>
                <TextField  sx = {{width: '100%' ,  "& fieldset": { border: 'none' } ,backgroundColor: 'lightblue'}}rows = {6} multiline
                    id="demo-helper-text-misaligned"
                    label="Enter Input"
                    onChange={(a) => {
                        settext(a.target.value);
                        console.log(text);
                    }}
                />
                <TextField type='number' sx = {{width: '100%', "& fieldset": { border: 'none'} , backgroundColor: 'olive'}}rows = {3} multiline
                    id="demo-helper-text-misaligned"
                    label="Enter key"
                    onChange={(a) => {
                        if (isNumber(a.target.value)){
                            setkey(a.target.value);
                            console.log(key);
                        }
                        else
                        {
                            
                        }
                    }}
                />

            </div>

            <div className='output'>
                {cipher}
            </div>
        </div>

        <div className='bottom'>
            <Button variant="contained" sx = {{marginBottom: '2pc' , marginTop: '3pc'}} onClick={() =>{
                setcipher(text);
            }}>Encrypt</Button>
            <Button variant="contained">Decrypt</Button>
        </div>
    </div>
  );
}

export default Home