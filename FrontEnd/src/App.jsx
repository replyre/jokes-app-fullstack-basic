import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
function App() {
  const [jokes, setjokes] = useState(null);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setjokes(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <>
      Total jokes: {jokes && jokes.length}
      {jokes && (
        <div className="jokes-container">
          {jokes.map((joke) => {
            return (
              <div className="joke">
                <p>Title: {joke.title}</p>
                <p>Content: {joke.content}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default App;
