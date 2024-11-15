import { useEffect, useState } from "react";
import "./App.scss";

function App() {
  const [user, setUser] = useState("");

  const getData = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="app">
      <h1>Name</h1>
      <img src="" alt="" />
      <p>Mail</p>
      <button onClick={getData}>Click</button>
    </div>
  );
}

export default App;
