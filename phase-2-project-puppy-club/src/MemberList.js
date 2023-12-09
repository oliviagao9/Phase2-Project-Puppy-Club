import MemberCard from "./MemberCard";

function MemberList( {members} ) {
  return (
    <ul >
      {members.map((member) => 
        <MemberCard key={member.id} member={member}/>
      )}
    </ul>
  )
}

export default MemberList;