import React, { Component } from 'react';

import firebase from "firebase/app";
import { useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classesBtn from '../button.css';
import classes from './todoInput.css';

class todoInput extends Component{
    render(){
        return(
            <div>
                <input type="text"
                className={classes.input}

                value={this.props.state.todoInput}
                onChange={this.props.todoInputUpdate}
                />
                <br/>
                <button className={classesBtn.addBtn} onClick={this.props.add}>+</button>
            </div>
        )
    }
}

export default todoInput;