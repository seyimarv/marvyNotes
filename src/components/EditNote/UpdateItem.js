import React, {useState, useEffect}from 'react'
import {Input, Textarea } from '../Form-input/Form-input'
import firebase from '../../firebase/Firebase'

const UpdateItem = ({note, setNote, setEditing, cancel, userid, setNotes}) => {
    const {id,title, textarea} = note
 
     
   console.log(userid)
   console.log(id)
    // useEffect(() =>  {
    //     setNote(currentNote);

    //    console.log(currentNote)
    // }, [currentNote])
   

    console.log(note)
    const onChange= e => {
        const {name, value}= e.target
        setNote({...note, [name]: value})
    }
    const handleUpdate = e => {
       e.preventDefault()
        const noteRef= firebase.firestore().collection('users').doc(userid).collection('notes').doc(id)
        noteRef.update({
            title: title,
            textarea: textarea
        })
        setNotes ({
            title: title,
            textarea: textarea
        })
        cancel()
        setEditing(false)
     
    }
   
    
    return (
        <div>
            
            <form className='form' >
                <Input className='input' name='title' type='text' maxLength={50}  required label='title' value={note.title} onChange={onChange} />
                <Textarea className='textarea' name='textarea' maxLength={200} required type='text' value={note.textarea} onChange={onChange} />
                 <button class="btn btn-primary btn-lg" type='submit' value="submit form"  onClick={handleUpdate}>update note</button>
            </form>
            
        </div>
    )
}

export default UpdateItem;