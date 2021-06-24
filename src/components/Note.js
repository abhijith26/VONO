import React, { useEffect, useState } from 'react';
import './styles/Note.css'

export default function Note(props) {
    const [title, setTitle] = useState('');
    const [time, setTime] = useState(null);
    const [audioSrc, setAudioSrc] = useState('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');

    useEffect(() => {
        setTitle(props.title);
        setTime(props.time)
        setAudioSrc(props.audio);
    },[])

    return (
        <div className="note-card">
            <div className="header">{title}</div>
            <div className="timestamp">{time}</div>
            <audio controls src={audioSrc}></audio>
        </div>
    )
}