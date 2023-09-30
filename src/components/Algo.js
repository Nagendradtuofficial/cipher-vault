import * as React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { theme_algo_context } from "../App";
import colorTheme from "./colorSetup";


export default function Algo() {
    const {algo , setAlgo , themeInd , setThemeInd} = React.useContext(theme_algo_context);

    const handleChange = (event) => {
        setAlgo(event.target.value);
        console.log(algo);
    };

    return (
        <div>
            <FormControl sx={{width : '20%' , backgroundColor: colorTheme[themeInd].algo_box}} >
                <InputLabel id="demo-simple-select-label">Algorithm</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={algo}
                    label="Algorithm"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>Ceaser-Cipher</MenuItem>
                    <MenuItem value={2}>Monoalphabetic Substitution</MenuItem>
                    <MenuItem value={3}>Vigenere-Cipher</MenuItem>
                    <MenuItem value={4}>AES</MenuItem>
                    <MenuItem value={5}>DES</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
