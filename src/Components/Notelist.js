import React from "react";
import Eachnote from "./Eachnote";
const Notelist =({notes}) => {
    return(
        <div>
            {notes.map((note,index)=>(
                <Eachnote key={index} note={note} />
            ))}
        </div>
    );
};
export default Notelist;