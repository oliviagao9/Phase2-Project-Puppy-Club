function MemberCard( { member } ) {
  console.log(member);
  return (
    <li className="card">
      <img src={member.image} alt={member.name} />
      <div className="card_container">
        <h3>{member.name}</h3>
        <h4>Breed: {member.breed}</h4>
      </div>
    </li>
  )
}

export default MemberCard;