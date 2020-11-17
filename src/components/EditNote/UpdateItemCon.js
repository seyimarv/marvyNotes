import React, {useState} from 'react'

import UpdateItem from './UpdateItem'
import Loading from '../Loading/Loading'


const UpdateItemCon = ({currentNote, setEditing, cancel, userid, setNotes}) => {
    const [note, setNote] = useState(currentNote)

  
    console.log(userid)
    return (
        userid ? <UpdateItem currentNote={currentNote} note={note} setNote={setNote} setNotes={setNotes} setEditing={setEditing} cancel={cancel} userid={userid}/> : <Loading />
    )

}


export default UpdateItemCon