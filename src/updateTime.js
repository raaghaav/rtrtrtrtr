import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    state = { time : ''};

    componentDidMount(){
        setInterval(() => {
            this.setState({time: new Date().toLocaleDateString() })
        }, 1000);
    }

    render(){
        return (
            <div className = 'time'>
            The time is : {this.state.time}
            </div>
        );
    }
}
ReactDOM.render

