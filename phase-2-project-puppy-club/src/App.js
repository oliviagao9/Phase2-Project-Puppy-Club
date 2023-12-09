import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MemberCard from "./MemberCard";

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
      <Routes>
        <Route
          path='/member'
          element={
            <MemberCard
              members = { members }/>}
        />
      </Routes>
    </div>
  );
}

export default App;
