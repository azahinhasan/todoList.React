import React, { Component } from 'react';

import firebase from "firebase/app";
import { useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class todoList extends Component{
    render(){
        return(

            <div>
                {this.props.todos.map(todo =>{
                    return(
                        <p>{todo.todo}</p>
                    )
                })}
            </div>
        )
    }
}

export default todoList;