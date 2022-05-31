import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [per, setPer] = useState(0);
  setInterval(function () {
    const now = new Date().getTime();
    const st = new Date("2022-05-31:09:30:00").getTime();
    const et = new Date("2022-05-31:18:30:00").getTime();
    setPer((((now - st) * 100) / (et - st)).toString().slice(0, 3) + "%");
  }, 60000);
  useEffect(() => {
    const now = new Date().getTime();
    const st = new Date("2022-05-31:09:30:00").getTime();
    const et = new Date("2022-05-31:18:30:00").getTime();
    setPer((((now - st) * 100) / (et - st)).toString().slice(0, 3) + "%");
  }, []);
  return <div className="App">{per}</div>;
}

export default App;
