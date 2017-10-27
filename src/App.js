import React, { Component } from 'react';
import './App.css';
import RaisedButton from "material-ui/FlatButton";
import TextField from 'material-ui/TextField';
import Icon from 'material-ui/svg-icons/av/play-arrow';
import fullWhite from 'material-ui/styles/colors';
import axios from "axios";


class App extends Component {

    state = {
        login: "",
        password: "",
    };


    auth() {
        axios.post('http://192.168.10.208:8020', {
            login: this.state.login ,
            password: this.state.password,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

  render() {
        const {login,password}= this.state;
    return (
      <div className="LoginForm">
          <TextField
              value={login}
              onChange={(event, newValue) => this.setState({
                  login: newValue,})}
              hintText="Login" floatingLabelText="Login" type="Login"/>
          <TextField value={password}
                onChange={(event, newValue) => this.setState({
                    password: newValue,})}
    hintText="Password Field" floatingLabelText="Password" type="password"/>
          <RaisedButton
              onClick={() => this.auth()}
              backgroundColor="#a4c639" icon={<Icon color={fullWhite}/>}/>
      </div>
    );
  }
}

export default App;
