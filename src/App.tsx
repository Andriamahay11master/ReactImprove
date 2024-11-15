import { useEffect, useState } from "react";
import "./App.scss";
import Main from "./components/main/Main";
import Header from "./components/header/Header";

function App() {
  const [user, setUser] = useState("");

  const getData = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="app">
      <Header user={user} />
      <Main {...user} />
    </div>
  );
}

export default App;
