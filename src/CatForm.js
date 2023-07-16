import React, { useState } from "react";

const CatForm = ({ handleCatSubmit }) => {
  const [name, setName] = useState("");
  const [stage, setStage] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: What it should be if we add more properties for Cat
    handleCatSubmit(name, stage, breed, gender, avatar);

    setName("");
    setStage("");
    setBreed("");
    setGender("");
    setAvatar("");
  };

  return (
    <section id="create-cat">
      <h2 style={{ textAlign: "center" }}>Create a Cat</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="avatar">Avatar</label>
        <input
          type="text"
          id="avatar"
          name="avatar"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          required
          placeholder="Image url"
        />
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Little Cutie, Megan Cat"
        />

        <label htmlFor="stage">Stage</label>
        <select
          id="stage"
          name="stage"
          value={stage}
          onChange={(e) => setStage(e.target.value)}
          required
        >
          <option value="">Select stage</option>
          <option value="kitten">Kitten</option>
          <option value="young">Young</option>
          <option value="adult">Adult</option>
        </select>

        <label htmlFor="breed">Breed</label>
        <input
          type="text"
          id="breed"
          name="breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          required
        />
        <div>
          <label>Gender</label>
          <div>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={gender === "Male"}
              onChange={(e) => setGender(e.target.value)}
              required
              style={{ display: "inline", width: "auto" }}
              id="maleRadio"
            />
            <label for="maleRadio" style={{ display: "inline" }}>
              Male
            </label>
          </div>

          <div>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={gender === "Female"}
              onChange={(e) => setGender(e.target.value)}
              required
              style={{ display: "inline", width: "auto" }}
              id="femaleRadio"
            />
            <label htmlfor="femaleRadio" style={{ display: "inline" }}>
              Female
            </label>
          </div>
        </div>

        <button type="submit">Create</button>
      </form>
    </section>
  );
};

export default CatForm;
