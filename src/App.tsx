import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import ExploreCollection from "./pages/ExploreCollection";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Index /></Layout>} />
        <Route path="/explore" element={<Layout><ExploreCollection /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;