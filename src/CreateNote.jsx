import { React, useState } from "react";

function CreateNote({ toggle, note, addNote, inputEvent }) {
  const [expand, setExpand] = useState(false);

  const expandBtn = () => {
    setExpand(true);
  };

  return (
    <>
      <div
        className="main_note"
        onClick={expandBtn}
        onDoubleClick={() => {
          setExpand(false);
        }}
      >
        <form>
          {expand ? (
            <>
              <input
                type={"text"}
                placeholder="Title"
                onChange={inputEvent}
                value={note.title}
                name="title"
              />

              {toggle ? (
                <button
                  className="MuiButton-root"
                  type="submit"
                  onClick={addNote}
                >
                  <i className="fas fa-plus plus_sign"></i>
                </button>
              ) : (
                <button
                  className="MuiButton-root"
                  type="submit"
                  onClick={addNote}
                >
                  <i className="fas fa-save plus_sign"></i>
                </button>
              )}
            </>
          ) : null}

          {/* <input 
              type={"text"}
              placeholder = "Title"
              onChange={inputEvent}
              value = {note.title}
              name = "title"/>  */}

          <textarea
            rows=""
            column=""
            placeholder={"write a note here..."}
            onChange={inputEvent}
            value={note.content}
            name="content"
          />

          {/* {
              toggle ? <button 
              className='MuiButton-root'
              type='submit'
              onClick={addNote}>                  	
              <i className="fas fa-plus plus_sign"></i> 
              </button> :  <button 
              className='MuiButton-root'
              type='submit'
              onClick={addNote}>                  	
              <i className="fas fa-save plus_sign"></i> 
              </button>
            } */}

          {/* <button 
              className='MuiButton-root'
              type='submit'
              onClick={addNote}>                  	
              <i className="fas fa-plus plus_sign"></i> 
              </button>  */}
        </form>
      </div>
    </>
  );
}

export default CreateNote;
