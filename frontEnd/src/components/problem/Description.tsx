import Content from "./description/Content";
import Title from "./description/Title";

function Description(){
    return(
        <div className="max-h-[85vh] overflow-y-auto pb-5">
            <Title id={1} title="Find Tha Safest Path" tag="Easy"></Title>
            <Content text=""></Content>
        </div>
    )
}
export default Description;