import React, { useState } from "react";

function CreateArea(props) {
  const [inputNote, setInputNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInputNote(prevValue => {
      if (name === "title") {
        return {
          ...prevValue,
          title: value
        }
      } else if (name === "content") {
        return {
          ...prevValue,
          content: value
        }
      }
    });
  }

  function submitNote(event) {
    props.onAdd(inputNote);
    setInputNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={submitNote}>
        <input name="title" placeholder="Title" onChange={handleChange} value={inputNote.title} autoComplete="off" />
        <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={inputNote.content} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
