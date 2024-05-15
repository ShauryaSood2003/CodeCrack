import ProblemNavBar from "../components/problem/ProblemNavBar";
import Code from "../components/Code";
import SwitchButton from "../components/problem/SwitchButton";

const CodePage = () => {
    
    return (
        <div className="grid grid-cols-2 bg-slate-200 h-screen w-screen gap-2">

            <div>
                <ProblemNavBar></ProblemNavBar>
                <SwitchButton></SwitchButton>
            </div>
            <Code /> 
        </div>
    );
};

export default CodePage;
