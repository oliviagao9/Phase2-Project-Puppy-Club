function MemberPage({ members }) {
  const membersToDisplay = members

  return (
    <main>
      <MemberList members = {membersToDisplay} />
    </main>
  )
}

export default MemberPage;