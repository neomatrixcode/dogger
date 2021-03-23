import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {

  const [data,setdata] = useState("");


const getdata = () => {
    axios
      .get("/api/todos/")
      .then((res) => setdata(JSON.stringify(res.data) ))
      .catch((err) => console.log(err));
  };

useEffect(() => {
    getdata();
    return () => {};
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{data}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
