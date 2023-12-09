import MemberCard from "./MemberCard";

function MemberList( {members} ) {
  return (
    <ul className="cards">
      {members.map((member) => 
        <MemberCard key={member.id} member={member}/>
      )}
    </ul>
  )
}

export default MemberList;