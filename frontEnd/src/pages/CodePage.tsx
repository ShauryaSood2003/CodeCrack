import ProblemNavBar from "../components/problem/ProblemNavBar";
import Code from "../components/Code";
import SwitchButton from "../components/problem/SwitchButton";

const CodePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-slate-200 max-h-screen  max-w-screen gap-x-2">
      <div>
        <ProblemNavBar></ProblemNavBar>
        <SwitchButton></SwitchButton>
      </div>
      <Code />
    </div>
  );
};

export default CodePage;
