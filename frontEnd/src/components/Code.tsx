import  { useState } from 'react';

import CodeNavbar from './code/CodeNavbar';
import CodeOptions from './code/CodeOptions';
import CodeIcon from './code/CodeIcon';
import Complier from './code/Complier';
import TestCase from './TestCase';

function Code() {
  const [value, setValue] = useState("");
  const [mode, setMode] = useState('javascript');
  const [input,setInput]=useState("");
  
  return (
    <div className=" space-y-3 ">
      <div>
        <CodeNavbar value={value} input={input}></CodeNavbar>

        <div className='rounded-md bg-white pb-8 mb-3'>
            <CodeIcon></CodeIcon>
            <CodeOptions mode={mode} setMode={setMode}></CodeOptions>
            <hr></hr>
            <Complier mode={mode} value={value} setValue={setValue}></Complier>
        </div>
      </div>
      <TestCase setValue={setInput}></TestCase>
    </div>
    
  );
}

export default Code;
