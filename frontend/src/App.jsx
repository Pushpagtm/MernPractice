import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data.jokes); // Access the "jokes" array from res.data
      })
      .catch((error) => {
        console.log(error);
      });
  }); // Add an empty dependency array to ensure useEffect runs only once

  return (
    <>
      <h1>Welcome to my jokes</h1>
      {jokes.map((data) => (
        <div key={data.id}>
          <h1>{data.title}</h1>
          <h2>{data.content}</h2>
        </div>
      ))}
    </>
  );
}

export default App;
