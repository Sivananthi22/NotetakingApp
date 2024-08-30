import React, { useState } from 'react';

const Noteform = ({ addNote }) => {
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!note.trim()) return;
    addNote(note);
    setNote('');
  };

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" id="NoteApp" name="fname" value={note} placeholder="Enter your Note" onChange={handleChange} />
        <button type="submit">Add Note</button>
      </form>
    </div>
  );
};

export default Noteform;
