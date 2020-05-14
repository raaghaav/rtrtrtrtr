import React from 'react';
import Reactdom from 'react-dom';

class counter extends React.Component{
    state = {count : 0 };

    componentDidMount(){
        this.setState({count: this.state.count+1})
    }

    render(){
        return(
            <div>
            counter 0 : {this.state.count}

            </div>
        )
    }
}
