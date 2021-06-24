import React, { useState } from 'react';
import Note from './Note';
import './styles/my-notes.css';

const dummyData = [{
    title: "Groceries List",
    time: '2021-02-08',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
}, {
    title: "Groceries List",
    time: '2021-02-08',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
}, {
    title: "Groceries List",
    time: '2021-02-08',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
},
{
    title: "Groceries List",
    time: '2021-02-08',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
}]

export default function MyNotes(props) {
    const [notes, setNotes] = useState(dummyData    );

    return (
        <div className="my-notes">
            {notes.map((note) => {
                return (<Note className="note" title={note.title} time={note.time} audio={note.audio} ></Note>)
            })}
        </div>
    )
}