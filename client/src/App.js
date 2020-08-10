import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [me, setMe] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("/me");
        setMe(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <div>
        <h1>{me.name}</h1>
        <h2>{me.motto}</h2>
      </div>
    </div>
  );
}

export default App;
