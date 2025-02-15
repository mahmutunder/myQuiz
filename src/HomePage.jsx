import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div>
      <h1>Welcome to my page</h1>
      <div>
        <Link to="/html">HTML</Link>
        <Link to="/js">JS</Link>
        <Link to="/react">React</Link>
      </div>
    </div>
  );
}

export default HomePage;
