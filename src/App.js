import './App.css';
import React, { useState } from "react";

const App = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("");
    setSubjects({
      english: false,
      maths: false,
      physics: false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Fixed typo
    console.log({
      firstName,
      lastName,
      email,
      contact,
      gender,
      subjects,
      resume,
      url,
      selectedOption,
      about,
    });
  };

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({ ...prev, [sub]: !prev[sub] }));
  };

  return (
    <div className="App" >
      <h1>Form in React</h1>
      <fieldset>
        <form > 
          {/* onSubmit={handleSubmit} */}

          <label htmlFor="firstname">First name :</label>
          <input
            type="text"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First name"
            required
          />

          <label htmlFor="lastname">Last name :</label>
          <input
            type="text"
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last name"
            required
          />

          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />

          <label htmlFor="contact">Contact :</label>
          <input
            type="tel"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter Mobile number"
            required
          />

          <label>Gender :</label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={gender === "male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            checked={gender === "female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female

          <label>Your best Subject :</label>
          <input
            type="checkbox"
            id="english"
            checked={subjects.english}
            onChange={() => handleSubjectChange("english")}
          />
          English

          <input
            type="checkbox"
            id="maths"
            checked={subjects.maths}
            onChange={() => handleSubjectChange("maths")}
          />
          Maths

          <input
            type="checkbox"
            id="physics"
            checked={subjects.physics}
            onChange={() => handleSubjectChange("physics")}
          />
          Physics

          <label htmlFor="file">Upload Resume :</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setResume(e.target.files[0])}
            required
          />

          <label htmlFor="url">Enter profile URL :</label>
          <input
            type="url"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Profile URL"
            required
          />

          <label>Select your choice :</label>
          <select
            id="select"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="" disabled>
              Select your Answer
            </option>
            <optgroup label="Beginners">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JS</option>
            </optgroup>
            <optgroup label="Advanced">
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="7">MongoDB</option>
            </optgroup>
          </select>

          <label htmlFor="about">About :</label>
          <textarea
            id="about"
            cols="30"
            rows="10"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="About yourself"
            required
          ></textarea>

          <button id='btn'  type="reset" onClick={handleReset}>
            Reset
          </button>

          <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
      </fieldset>
    </div>
  );
};

export default App;
