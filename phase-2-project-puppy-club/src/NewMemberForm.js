import React, { useState } from "react";

function NewMemberForm({ onAddMember }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [breed, setBreed] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let newMember = { name, image, breed };

    fetch("http://localhost:4000/puppys", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(newMember),
    })
      .then((res) => res.json())
      .then((member) => {
        onAddMember(member);
        alert("the new member is added!")
      });
  }

  return (
    <div id="member-form">
      <h2>New Member</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="Member name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="image"
          value={image}
          placeholder="Image URL"
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type="text"
          name="breed"
          value={breed}
          placeholder="Member breed"
          onChange={(e) => setBreed(e.target.value)}
        />
        <button type="submit">Add Member</button>
      </form>
    </div>
  );
}

export default NewMemberForm;
