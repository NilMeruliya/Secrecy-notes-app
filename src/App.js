import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";

// get data from localStorage

const getData = () => {
  let data = localStorage.getItem("info");

  if (data) {
    return JSON.parse(localStorage.getItem("info"));
  } else {
    return [];
  }
};

function App() {
  const [note, setNote] = useState({
    title: "",
    content: "",
  }); // input data

  const [addItem, setAddItem] = useState(getData([])); // add Items

  const [toggle, setToggle] = useState(true); // toggle edit button

  const [isEdit, setIsEdit] = useState(null); // to get id

  // input event

  const inputEvent = (event) => {
    const { value, name } = event.target;
    setNote({ ...note, [name]: value });

    // old method
    // setNote((preValue) => {
    //   return {...preValue, [name] : value }
    // })
  };

  // add a note

  const addNote = (event) => {
    event.preventDefault();
    if (!addItem) {
      alert("fill the data");
    } else if (addItem && !toggle) {
      setAddItem(
        addItem.map((elem, index) => {
          if (index === isEdit) {
            return { ...elem, title: note.title, content: note.content };
          }
          return elem;
        })
      );
      setToggle(true);
      setNote({ title: "", content: "" });
      setIsEdit(null);
    } else {
      setAddItem([...addItem, note]);
      setNote({ title: "", content: "" });
    }
  };

  // delete a note

  const deleteNote = (id) => {
    setAddItem(
      addItem.filter((ele, index) => {
        return id !== index;
      })
    );
  };

  // edit a note

  const editNote = (id) => {
    let editItem = addItem.find((elem, index) => {
      return index === id;
    });
    // console.log(editItem);
    setToggle(false);
    setNote({ title: editItem.title, content: editItem.content });
    setIsEdit(id);
  };

  // set data in localStorage

  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(addItem));
  }, [addItem]);

  return (
    <>
      <div className="App">
        <Header />
        <CreateNote
          note={note}
          toggle={toggle}
          addNote={addNote}
          inputEvent={inputEvent}
        />
        {/* <Note /> */}
       
        {addItem.map((ele, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={ele.title}
              content={ele.content}
              deleteNote={deleteNote}
              editNote={editNote}
            />
          );
        })}
        <Footer />
      </div>
    </>
  );
}

export default App;
