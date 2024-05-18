import { useNavigate } from "react-router-dom";
function ProblemNavBar(){
    const navigate=useNavigate();
    return(
        <div className="flex space-x-8 my-3 mx-2">
            <div onClick={()=>{navigate("/")}} className="flex space-x-1">
                <img className="w-6 h-6 rounded-[100%]" src="https://p1.hiclipart.com/preview/724/587/750/browser-icon-code-icon-coding-icon-html-icon-programming-icon-web-icon-text-line-logo-sign-png-clipart.jpg" ></img>
                <p>CodeCrack</p>
            </div>
            <div onClick={()=>{navigate("/problemlist")}} className="flex space-x-1">
                <ProblmeListIcon/>
                <p>Problems List</p>
            </div>
        </div>
    )
}
function ProblmeListIcon(){
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
  </svg>
  
}
export default ProblemNavBar;