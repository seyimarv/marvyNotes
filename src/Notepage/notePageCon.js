import React from 'react'

import NotePage from './Notepage'
import Loading from '../components/Loading/Loading'

const NotePageCon = ({user}) => {
    console.log(user)
    
    return (
        <div>
        {
            user ? <NotePage id={user.id} user={user}/> : <Loading />
        }
        </div>
    )
}

export default NotePageCon