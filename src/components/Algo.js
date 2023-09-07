import * as React from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function Algo() {
    const [algo , setalgo] = React.useState(null);

    const handleChange = (event: SelectChangeEvent) => {
        setalgo(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{width : '20%'}} >
                <InputLabel id="demo-simple-select-label">Algorithm</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={algo}
                    label="Algorithm"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>Ceaser-Cipher</MenuItem>
                    <MenuItem value={2}>Trasnformation</MenuItem>
                    <MenuItem value={3}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
