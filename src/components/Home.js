import React, { useContext } from 'react'
import './Home.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Algo from './Algo';
import { theme_algo_context } from '../App';
import labels from "./labels";
import colorTheme from './colorSetup';
import { type } from '@testing-library/user-event/dist/type';
import { Code } from '@mui/icons-material';


const Home = () => {

    const { text, settext } = useContext(theme_algo_context);
    const { key, setkey, themeInd, setThemeInd } = useContext(theme_algo_context);
    const { cipher, setcipher, algo } = useContext(theme_algo_context);

    const isNumber = (a) => {
        if (a >= '0' && a <= '9')
            return true;
        return false;
    }

    const to_full = (a) => {
        const letters = new Map();
        var code = 0;
        for (let i = 0; i < a.length; i++) {
            var code3 = a.charCodeAt(i);
            if (code3 >= 65 && code3 <= 65 + 25)
                code3 += 32;
            code3 -= 97;
            let r = code3 % 26;
            r += 65;
            var p = String.fromCharCode(r);
            if (!letters.has(p)) {
                code = a.charCodeAt(i);
                letters.set(p);
            }
        }
        if (code >= 65 && code <= 65 + 25)
            code += 32;
        code -= 97;
        for (let code2 = code; code2 < code + 26; code2++) {
            let r = code2 % 26;
            r += 65;
            var p = String.fromCharCode(r);
            if (!letters.has(p)) {
                letters.set(p);
            }
        }

        let t = "";
        for (const x of letters.entries()) {
            t += x;
        }
        console.log(t);
        return t;
    }

    const enct = () => {
        if (algo === 1) {
            let p = "";
            let k = Number(key);
            for (var i = 0; i < text.length; i++) {
                var code = text.charCodeAt(i);
                if (code >= 65 && code <= 65 + 26 - 1) {
                    code -= 65;
                    code += k;
                    code %= 26;
                    code += 65;
                }

                if (code >= 97 && code <= 97 + 26 - 1) {
                    code -= 97;
                    code += k;
                    code %= 26;
                    code += 97;
                }
                p += String.fromCharCode(code);
            }
            console.log(p);
            setcipher(p);
        }
        else if (algo === 2) {
            let p = "";
            let k = to_full(key);

            for (let i = 0; i < text.length; i++) {
                var code = text.charCodeAt(i);

                if (code >= 65 && code <= 65 + 25) {
                    code -= 65;
                    var code2 = k.charCodeAt(2 * code);
                    console.log(code2);
                    if (code2 >= 97 && code2 <= 97 + 25) {
                        code2 -= 32;
                    }
                }

                else if (code >= 97 && code <= 97 + 25) {
                    code -= 97;
                    var code2 = k.charCodeAt(2 * code);
                    console.log(code2);
                    if (code2 >= 65 && code2 <= 65 + 25) {
                        code2 += 32;
                    }
                }
                p += String.fromCharCode(code2);
            }
            setcipher(p);
        }
        else if (algo === 3) {
            let p = "";
            let k = key;
            while (k.length < text.length) {
                k += key;
            }
            console.log(key);
            for (let i = 0; i < text.length; i++) {
                var code = text.charCodeAt(i);
                var code2 = k.charCodeAt(i);

                if (code >= 65 && code <= 65 + 25) {
                    code -= 65;
                    if (code2 >= 65 && code2 <= 65 + 25)
                        code2 -= 65;
                    else
                        code2 -= 97;
                    code += code2;
                    code %= 26;
                    code += 65;
                }

                if (code >= 97 && code <= 97 + 26 - 1) {
                    code -= 97;
                    if (code2 >= 65 && code2 <= 65 + 26 - 1)
                        code2 -= 65;
                    else
                        code2 -= 97;
                    code += code2;
                    code %= 26;
                    code += 97;
                }
                p += String.fromCharCode(code);
            }
            setcipher(p);
        }
        else {
            setcipher(text);
        }
    }

    const dect = () => {
        if (algo === 1) {
            let p = "";
            let k = Number(key);
            for (var i = 0; i < text.length; i++) {
                var code = text.charCodeAt(i);

                if (code >= 65 && code <= 65 + 26 - 1) {
                    code -= 65;
                    code += 26
                    code -= k;
                    code %= 26;
                    code += 65;
                }

                if (code >= 97 && code <= 97 + 26 - 1) {
                    code -= 97;
                    code += 26
                    code -= k;
                    code %= 26;
                    code += 97;
                }

                p += String.fromCharCode(code);
            }
            setcipher(p);
        }
        else if (algo === 2) {
            let p = "";
            let k = to_full(key);
            for (let i = 0; i < text.length; i++) {
                var code = text.charCodeAt(i);
                if (code >= 65 && code <= 65 + 25) {
                    code -= 65;
                }
                if (code >= 97 && code <= 97 + 25) {
                    code -= 97;
                }
                let j = 0;
                while (j < 26) {
                    var code2 = k.charCodeAt(2 * j);
                    if (code2 >= 65 && code2 <= 65 + 25) {
                        code2 -= 65;
                    }
                    if (code2 >= 97 && code2 <= 97 + 25) {
                        code2 -= 97;
                    }

                    if (code === code2)
                        break;

                    j++;
                }

                if (j >= 26) {
                    break;
                }

                if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 65 + 25) {
                    j += 65;
                }
                else
                    j += 97;

                p += String.fromCharCode(j);
            }
            setcipher(p);
        }
        else if (algo === 3) {
            let p = "";
            let k = key;
            while (k.length < text.length) {
                k += key;
            }
            for (var i = 0; i < text.length; i++) {
                var code = text.charCodeAt(i);
                var code2 = k.charCodeAt(i);

                if (code >= 65 && code <= 65 + 26 - 1) {
                    code -= 65;
                    if (code2 >= 65 && code2 <= 65 + 26 - 1)
                        code2 -= 65;
                    else
                        code2 -= 97;
                    code -= code2;
                    code %= 26;
                    code += 65;
                }

                if (code >= 97 && code <= 97 + 26 - 1) {
                    code -= 97;
                    if (code2 >= 65 && code2 <= 65 + 26 - 1)
                        code2 -= 65;
                    else
                        code2 -= 97;
                    code -= code2;
                    code %= 26;
                    code += 97;
                }

                p += String.fromCharCode(code);
            }
            setcipher(p);
        }
        else {
            setcipher(text);
        }
    }

    return (
        <div className='home' style={{ backgroundColor: colorTheme[themeInd].home_bg_col }}>
            <div className='select-algo'>
                <Algo />
            </div>

            <div className='top'>
                <div className='input'>
                    <TextField sx={{ width: '100%', "& fieldset": { border: 'none' },borderRadius: '15px' , backgroundColor: colorTheme[themeInd].input_col , boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' , marginBottom: '20px'}} rows={6} multiline
                        id="demo-helper-text-misaligned"
                        label={algo ? labels[algo].input_label : "Enter Input"}
                        InputProps={{
                            style: {
                                color: colorTheme[themeInd].input_txt_col,
                            },
                        }}
                        InputLabelProps={{
                            style: {
                                color: colorTheme[themeInd].input_txt_col,
                            },
                        }}
                        onChange={(a) => {
                            settext(a.target.value);
                            console.log(text);
                        }}

                    />
                    <TextField type='number' sx={{ width: '100%', "& fieldset": { border: 'none' },borderRadius: '15px', backgroundColor: colorTheme[themeInd].key_col , boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }} rows={3} multiline
                        id="demo-helper-text-misaligned"
                        label={algo ? labels[algo].key_label : "Enter Key"}
                        InputProps={{
                            style: {
                              color: colorTheme[themeInd].input_txt_col,
                            },
                          }}
                          InputLabelProps={{
                            style: {
                              color: colorTheme[themeInd].input_txt_col,
                            },
                          }}
                        onChange={(a) => {
                            setkey(a.target.value);
                            console.log(key);
                        }}

                    />

                </div>

                <div className='output' placeholder='Type your text here' style={{backgroundColor: colorTheme[themeInd].output_col , color: colorTheme[themeInd].input_txt_col}}>
                    {cipher}
                </div>
            </div>

            <div className='bottom'>
                <Button variant="contained" sx={{ marginBottom: '2pc', marginTop: '3pc', backgroundColor: colorTheme[themeInd].button_col , color: colorTheme[themeInd].button_txt_color }} onClick={() => {
                    enct();
                }}>Encrypt</Button>
                <Button variant="contained" sx ={{backgroundColor: colorTheme[themeInd].button_col , color: colorTheme[themeInd].button_txt_color}} onClick={() => {
                    dect();
                }}>Decrypt</Button>
            </div>
        </div>
    );
}

export default Home