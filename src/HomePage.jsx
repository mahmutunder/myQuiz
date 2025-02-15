import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div>
      <h1>Welcome to my page</h1>
      <div>
        <Link to="/html" className="link">HTML</Link>
        <Link to="/js" className="link">JS</Link>
        <Link to="/react" className="link">React</Link>
      </div>
    </div>
  );
}

export default HomePage;
