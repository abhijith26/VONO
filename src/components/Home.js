import React from 'react';
import AudioRecorder from './Audio-recorder';
import './styles/home.css'
import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon'



class Home extends React.Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)
        this.state = {
            dialogState: false
        }
        this.audioTag = React.createRef();
    }

    openDialog = (e) => {
        this.setState({ dialogState: true })
    }

    dialogClosed = (e) => {
        this.setState({dialogState: false})
    }

    render() {
        return (
            <div className="body">
                <button onClick={this.openDialog}>Add note</button>
                <Dialog open={this.state.dialogState}>
                    <AudioRecorder></AudioRecorder>
                </Dialog>
            </div>
        )
    }
}

export default Home;