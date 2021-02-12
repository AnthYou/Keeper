import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([{
    title: "Note title",
    content: "Note content"
  }]);

  function createNote(note, index) {
    return <Note 
              key={index}
              id={index}
              title={note.title}
              content={note.content}
              onDelete={deleteNote} />
  }

  function addNote(note) {
    setNotes(prevValue => {
      return [...prevValue, note];
    });
  }

  function deleteNote(id) {
    setNotes(prevValue => {
      return prevValue.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
