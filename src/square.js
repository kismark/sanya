import React, { Component } from 'react';
import { RaisedButton } from "material-ui";
import Icon from 'material-ui/svg-icons/action/favorite';
import { purple500 } from "material-ui/styles/colors";

class Square extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "*********",
        }
    }

    render() {

        return (
            <div>
                <h1>{this.props.text}</h1>
                <h1>{this.state.message}</h1>
                <RaisedButton backgroundColor={purple500} icon={<Icon/>} onClick={() => this.setState({message:"Д!"})} label="Узнай правду" />
            </div>
        );
    }
}

export default Square;