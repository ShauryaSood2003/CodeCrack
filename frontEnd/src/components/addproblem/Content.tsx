import JoditEditor from 'jodit-react';
import  { useRef } from 'react';
function Content({setContent,content}:{setContent:(item:string)=>void,content:string}){

    const editor = useRef(null);
    
    return(
        <div className='flex flex-col space-y-3 m-2'>
            <label className="text-2xl ">Content</label>
            <JoditEditor
                ref={editor}
                value={content}
                tabIndex={5}
                onBlur={newContent => setContent(newContent)}
                onChange={()=>{}}
                config={{
                    height: 500, // Set the desired height in pixels
                }}
            />
        </div>
    )
}
export default Content;