import { React } from "react";

function Note({ title, content, deleteNote, id, editNote }) {
  return (
    <>
      <div className="note">
        <h1>{title}</h1>
        <br/>
        <p>{content}</p>
        <button className="btn">
          <i
            className="fas fa-trash deleteIcon"
            onClick={() => {
              deleteNote(id);
            }}
          ></i>
          <i
            className="fas fa-edit btnEdit"
            onClick={() => {
              editNote(id);
            }}
          ></i>
        </button>
      </div>
    </>
  );
}

export default Note;
