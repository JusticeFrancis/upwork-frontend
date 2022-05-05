import logo from "./logo.svg";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Index from "./components/home_components/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Index />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
