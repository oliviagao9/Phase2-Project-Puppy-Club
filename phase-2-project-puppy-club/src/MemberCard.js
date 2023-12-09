function MemberCard( { member } ) {
  return (
    <li className="card">
      <img src={member.image} alt={member.name} />
      <h4>{member.name}</h4>
    </li>
  )
}

export default MemberCard;