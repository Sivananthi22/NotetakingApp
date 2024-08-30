import React,{useState} from "react";
import Noteform from "./Noteform";
import Notelist from "./Notelist";
import "/home/sivananthi/Documents/VSC/React/noteapp/src/Components/style.css";
const Note=() =>{
    const [notes, setNotes] =useState([]);
    const addNote = (newNote) => {
        setNotes([...notes, newNote]);
      };
    return (
         <div>
            <h1>Note Taking App</h1>
            <Noteform addNote={addNote}/>
            <Notelist notes={notes}/>
         </div>    );
};
export default Note;