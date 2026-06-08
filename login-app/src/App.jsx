import { useState } from "react";
import Login from "./login.jsx";
import Register from "./register.jsx";
function App() {
  const [count, setCount] = useState(0)

  return (
    <Login/>
  );
}

export default App;