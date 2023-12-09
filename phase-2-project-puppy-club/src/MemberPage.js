import MemberList from "./MemberList";
import Search from "./Search";

function MemberPage({ searchInput, onSearchInput, members }) {
  const membersToDisplay = members

  return (
    <main>
      <Search searchInput = {searchInput} onSearchInput = {onSearchInput} />
      <MemberList members = {membersToDisplay} />
    </main>
  )
}

export default MemberPage;