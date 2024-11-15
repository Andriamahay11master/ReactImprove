import { useEffect, useState } from "react";
import "./App.scss";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import { UserType } from "./model/UserType";

function App() {
  const [user, setUser] = useState<UserType>();

  const getData = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  };

  useEffect(() => {
    getData();
    console.log(typeof user);
  }, []);

  return (
    <div className="app">
      <Header user={user} />
      <Main {...user} getData={getData} />
    </div>
  );
}

export default App;
