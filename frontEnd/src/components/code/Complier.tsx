import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css'; // Base styles for CodeMirror
import 'codemirror/mode/javascript/javascript'; // JavaScript mode
import 'codemirror/mode/clike/clike'; // C++ and Java modes
import 'codemirror/theme/material.css'; 

function Complier({mode,value,setValue}:{mode:string,value:string,setValue:(item:string)=>void}){
    

    const options = {
        mode: mode,
        theme: 'material',
        lineNumbers: true,
    };
    return(
        <div className='text-xl'>
            <CodeMirror
                value={value}
                options={options}
                onBeforeChange={(editor, data, value) => {
                    setValue(value);
                }}
                onChange={(editor, data, value) => {
                
                }}
            />
        </div>
    )
}
export default Complier;