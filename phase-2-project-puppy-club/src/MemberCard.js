function MemberCard( { member } ) {
  console.log(member);
  return (
    <li >
      <h4>{member.name}</h4>
    </li>
  )
}

export default MemberCard;