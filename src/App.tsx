import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ExploreCollection from "./pages/ExploreCollection";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/explore" element={<ExploreCollection />} />
      </Routes>
    </Router>
  );
}

export default App;