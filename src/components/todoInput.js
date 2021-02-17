import React, { Component } from 'react';

import firebase from "firebase/app";
import { useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class todoList extends Component{
    render(){
        return(
            <div>
                <TextField
                id="standerd-basic" 
                label="Input"
                value={this.props.state.todoInput}
                onChange={this.props.todoInputUpdate}
                />
                <button onClick={this.props.add}>ADD</button>
            </div>
        )
    }
}

export default todoList;