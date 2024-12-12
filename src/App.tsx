import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import Index from "./pages/Index";
import ExploreCollection from "./pages/ExploreCollection";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Index />} />
          <Route path="/explore" element={<ExploreCollection />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;