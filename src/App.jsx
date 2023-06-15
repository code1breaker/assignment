import React from "react";
import Provider from "./context/Provider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Editor from "./components/Editor";
import HomePage from "./HomePage";

const App = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="w-[80%] m-auto p-5">
        <Router>
          <Provider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route exact path="/editor/:id" element={<Editor />} />
            </Routes>
          </Provider>
        </Router>
      </div>
    </div>
  );
};

export default App;
