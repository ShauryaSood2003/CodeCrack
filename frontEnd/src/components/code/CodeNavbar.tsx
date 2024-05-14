function CodeNavbar({value,input}:{value:string,input:string}){
    function handleSubmit(){
        console.log(value);
        console.log(input);
    }
    function handleRun(){
        console.log(value);
        console.log(input);
    }
    return(
        <div className='flex space-x-8 my-3'>
            <div className='text-slate-600 flex space-x-1 font-semibold'>
                <ArrowRunIcon/>
                <button onClick={handleSubmit}>Run</button>
            </div>
            <div className='text-green-600 flex space-x-1 font-semibold'>
                <CloudSubmitIcon/>
                <button onClick={handleRun}>Submit</button>
            </div>
        </div>
    )
}
function CloudSubmitIcon(){
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
  </svg>
  
}
function ArrowRunIcon(){
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
  </svg>
}
export default CodeNavbar;