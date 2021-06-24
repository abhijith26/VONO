import React from 'react';


class AudioRecorder extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            mediaRecorderObj: null,
            audio: []
        }
        this.audioTag = React.createRef();
    }

    startRecording = (e) => {
        e.preventDefault();
        navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();
            this.setState({ mediaRecorderObj: mediaRecorder });
            mediaRecorder.addEventListener('dataavailable', evt => {
                this.state.audio.push(evt.data);
            })
        })

    }

    stopRecording = (e) => {
        console.log(this.state);
        e.preventDefault();
        this.state.mediaRecorderObj.addEventListener('stop', () => {
            const audioBlob = new Blob(this.state.audio, { 'type': 'audio/mp3; codecs=opus' });
            const audioUrl = URL.createObjectURL(audioBlob);
            this.audioTag.current.src = audioUrl;
        })
        this.state.mediaRecorderObj.stop();
    }

    render() {
        return (
            <div>
                <button onClick={this.startRecording}>Record</button>
                <button onClick={this.stopRecording}>stop</button>
                <audio controls autoPlay ref={this.audioTag}></audio>
            </div>
        )
    }

}

export default AudioRecorder;