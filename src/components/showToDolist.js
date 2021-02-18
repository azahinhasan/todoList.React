import React, { Component } from 'react';

import firebase from "firebase/app";
import { useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classes from './showToDolist.css';
import classesBtn from '../button.css';

class todoList extends Component{

    id(id){
        console.log("id "+id);
    }
    render(){
        let noTask= '';
        if (this.props.todos.length == 0) 
        {
            noTask = <h2>No Task Left!</h2>
            console.log(this.props.todos);
        }
        return(

            <div>

            {noTask}
            <table>
                <thead></thead>

                {this.props.todos.map(todo =>{

                    return(
                    <tr>
                        <td className={todo.inprogress ? classes.dataNotDone : classes.dataDone}>
                            {todo.todo} 
                        </td>

                        <td>
                            <button className={classesBtn.button} onClick={this.props.update.bind(this,todo.id,todo.inprogress)}>✔</button>
                            <div className={classesBtn.divider}></div>
                            <button className={classesBtn.button} onClick={this.props.delete.bind(this,todo.id)}>✖</button>
                        </td>
                    </tr>
                    )})}

            </table> 
            </div>
        )
    
}
}

export default todoList;