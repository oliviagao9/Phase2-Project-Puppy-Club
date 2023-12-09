import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MemberPage from "./MemberPage";

function App() {
  const [members, setMembers] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:4000/puppys")
    .then((res) => res.json())
    .then((member) => {
      setMembers(member);
    });
  }, []);

  console.log(members);

  return (
    <div className="App">
      <Routes>
        <Route
          path='/members'
          element={
            <MemberPage
              members = {members}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
