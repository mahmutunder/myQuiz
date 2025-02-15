import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function SubjectPage() {
  const { subject, subElement } = useParams();
  const [datas, setDatas] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`/myQuiz/data/${subject}.json`);
      const data = await res.json();
      console.log(data);
      setDatas(data);
    }
    fetchData();
  }, [subject]);
  const titles = ["html", "js", "react"];


  return (
    <div className="container">
      <div className="subject">
        {titles.map((title) => (
          <button key={title} onClick={() => navigate(`/${title}`)}>
            {title.toLocaleUpperCase()}
          </button>
        ))}
      </div>
      <div className="subElement">
        {datas?.subElements?.map((sub) => (
          <button
            key={sub}
            onClick={() => navigate(`/${subject}/${sub}`)}
          >
            {sub}
          </button>
        ))}
      </div>
      <div className="explanation">
        {subElement ? 
            <p>{datas?.explanations?.[subElement]}</p>
         : (
          <p>Select an element</p>
        )}
      </div>
    </div>
  );
}

export default SubjectPage;
