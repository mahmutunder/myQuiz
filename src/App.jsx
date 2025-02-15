import { Route, Routes,Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import SubjectPage from "./SubjectPage";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:subject" element={<SubjectPage />} />
          <Route path="/:subject/:subElement" element={<SubjectPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
