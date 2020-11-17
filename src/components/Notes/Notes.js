import React from 'react'
import NoteView from '../noteview/NoteView'
import './notes.scss'





const Notes = ({ notesArray, setEditing, note, setNotes, userId}) => {
   

    return (
        
        <div className='notes-page'>
          <div className='cards'>
          <div className='row'>
           {notesArray.map(({ id, ...otherProps}) => (
            <div className="col-md-6 col-sm-12 col-lg-4">
            <NoteView key={id} id={id} {...otherProps} setEditing={setEditing} userId={userId} note={note} setNotes={setNotes}/></div>
           ))}
           </div>
        </div>
        </div>
    )
}

export default Notes;