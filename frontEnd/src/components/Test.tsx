import JoditEditor from 'jodit-react';
import  { useState, useRef } from 'react';
function Test(){
    const editor = useRef(null);
    const [content,setContent]=useState("");
    return(
        <JoditEditor
			ref={editor}
            value={content}
            onBlur={()=>{console.log(content);
            }}
            onChange={newContent => setContent(newContent)}
        />
    )
}
export default Test;