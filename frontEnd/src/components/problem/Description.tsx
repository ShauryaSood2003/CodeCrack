import { useEffect, useState } from "react";
import Content from "./description/Content";
import Title from "./description/Title";
import { useParams } from "react-router-dom";
import axios from "axios";

function Description() {
  const { id } = useParams();
  const [problem, setProblem] = useState<any>([]);

  useEffect(() => {
    async function callMe() {
      const res = await axios({
        method: "GET",
        url: `http://localhost:4000/user/problem/${id}`,
      });
      setProblem(res.data);
    }
    callMe();
  }, [id]);
  if (problem.length == 0) {
    return <h1>Loading . . . </h1>;
  }
  return (
    <div className="max-h-[85vh] overflow-y-auto pb-5">
      <Title
        id={problem[0].id}
        title={problem[0].title}
        tag={problem[0].tag}
      ></Title>
      <Content text={problem[0].content}></Content>
    </div>
  );
}
export default Description;
