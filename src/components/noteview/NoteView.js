import React from 'react'
import './noteviews.scss'
import firebase from '../../firebase/Firebase'





const NoteView = ({id, title, textarea, setEditing, note, setNotes})=> {

   
    const noteRef = firebase.firestore().collection("/notes")

    const deleteNote = (theId) =>{ 
        theId && noteRef.doc(theId).delete(); 
    
    }
    const editItem = () => {
        setEditing(true)
        setNotes({
            id,
            title,
            textarea
        })
    }

    
   
 return(
        <div class="card" style={{width: 20 + "rem"}}>
        <div className="editdelete">
        <div className='cancel' title='delete' onClick={() => deleteNote(id)}>&#128465;</div>
        <div  className='edit'  title='edit' onClick={() => editItem(note) }>&#9998;</div>
        </div>
        <div class="card-body">
           <div class="card-header">
            <h5 class="card-title">{title}</h5>
            </div>
            <p class="card-text">{textarea}</p>
            
            
        </div>
        </div>
   
    
        
)
}

export default NoteView;








