import { useState, useEffect } from "react";

function App() {
  const [member, setMembers] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:4000/puppys")
    .then((res) => res.json())
    .then((member) => {
      setMembers(member);
    });
  }, []);

  console.log(member);

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
