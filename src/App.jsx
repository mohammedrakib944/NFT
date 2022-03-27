import { BrowserRouter, Routes, Route } from "react-router-dom";
// import pages
import Nav from "./components/nav/Nav";
import Notfound from "./pages/notfound/Notfound";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Create from "./pages/create/Create";
import MyAssets from "./pages/myAssets/MyAssets";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-assets" element={<Create />} />
          <Route path="/my-assets" element={<MyAssets />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
