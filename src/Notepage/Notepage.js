import React, {useState, useEffect} from 'react'
import {Input, Textarea} from '../components/Form-input/Form-input'
import firebase from '../firebase/Firebase'
import { firestore, convertNotesSnapshotToMap} from '../firebase/Firebase'
import Notes from '../components/Notes/Notes'

import UpdateItem from '../components/EditNote/UpdateItem'
import './Notepage.scss'



const NotePage = () => {
   const [notesArray, setNotesArray] = useState([])
   const [notes, setNotes] = useState({id:null, title: '', textarea: ''})
   const {title, textarea} = notes
   const [editing, setEditing ] = useState(false)
   const [isLoading, setIsloading] = useState(true)
   const [searchField, setSearchField] = useState('')

 

   const handleChange = (event) => {
    const { value, name } = event.target

    setNotes({...notes, [name]: value })
   }

const noteRef = firebase.firestore().collection("/notes")
   const updateNote = (theId) => {
       setEditing(false)
      theId && noteRef.doc(theId).update({title: title, textarea: textarea})
      console.log(notes)
       
   }
   const handleSubmit = async event => {
    event.preventDefault()
    const data=firebase.firestore()
     data.collection('notes').add({
        title: title,
        textarea: textarea
    })
    
    // const {title, textarea} = notesRef
    setNotes({
        id: '',
        title: '',
        textarea: ''
    })
 }
 const onSearchChange = event => {
    setSearchField( event.target.value );
    console.log(searchField)
  };

  
 const cancel = () => {
    setNotes({
        id: '',
        title: '',
        textarea: ''
    })
 }
 const updateNotes = (notesMap) => {
     setNotesArray(notesMap)
 }


 
 useEffect(() => {

     const noteRef = firestore.collection('notes');
     noteRef.onSnapshot(async snapshot => {
       const notesMap =  convertNotesSnapshotToMap(snapshot);
       updateNotes(Object.values(notesMap))
       setIsloading(false)
       
       
     })
 }, [])
 const filteredNotesArray = notesArray.filter(notes =>
    notes.title.toLowerCase().includes(searchField.toLowerCase())
  );


 
 return(<div className='notepage'>
         <form class="form-inline my-2 my-lg-0 pt-3 ">
      <input class="form-control mr-sm-2" type="search" onChange={onSearchChange} placeholder="Search notes" aria-label="Search" />
    </form>
         <div className='contain'>
          <div className='container'>
           <div className='row'>
            <div className="col-md-6 col-sm-6 col-lg-6 left-section">
                <div className='text'>
                <p class="leader">write your notes,</p>
                <p class='subtext'>express your emotions</p>
                </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6 right-section">

                { editing ? <UpdateItem currentNote={notes} updateNote={updateNote} setNotes={setNotes} setEditing={setEditing} editing={editing} cancel={cancel}/>   :  <form className='form' onSubmit={handleSubmit} >
                        <Input className='input' name='title' type='text' value={title} handleChange={handleChange}   maxLength={50} required placeholder='Title, max of 50 characters' label='title' />
                        <Textarea className='textarea' name='textarea' type='text' value={textarea} maxLength={200} placeholder='Text, max of 200 characters' required handleChange={handleChange}/>
                        {/* <CustomButton className="btn btn-primary btn-lg" type='submit' value="submit form"> submit note</CustomButton> */}
                        <button class="btn btn-primary btn-lg" value="submit form">Submit note</button>
                        

                    </form>}
            </div>
           </div>
          </div>
          </div>
           { isLoading ? <div><button class="btn btn-primary" type="button" disabled>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            <span class="sr-only">Loading...</span>
                            </button>
                            <button class="btn btn-primary" type="button" disabled>
                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Loading...
                        </button></div>:
            <div className='container'>
            <Notes notesArray={filteredNotesArray} note={notes} setEditing={setEditing} setNotes={setNotes}/> </div>}
    </div>)
}

export default NotePage;