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
                onBlur={newContent => setContent(newContent)}
                onChange={()=>{}}
            />
        </div>
    )
}
export default Content;