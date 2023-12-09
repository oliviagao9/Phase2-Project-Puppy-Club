import { useState, useEffect } from "react";
import { Route, Routes, NavLink} from "react-router-dom";
import MemberPage from "./MemberPage";
import NewMemberForm from "./NewMemberForm";

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

  function onAddMember(newMember) {
    setMembers([...members, newMember]);
  }

  return (
    <div className="app">
      <div className="navbar">
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/members'>Members</NavLink>
        <NavLink to='/addmember'>New Member</NavLink>
      </div>

      <Routes>
        <Route
          path='/members'
          element={
            <MemberPage
              members = {members}
            />
          }
        />
        <Route
          path='/addmember'
          element={<NewMemberForm
            onAddMember = {onAddMember}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
