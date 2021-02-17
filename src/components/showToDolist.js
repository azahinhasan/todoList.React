import React, { Component } from 'react';
import classes from './showToDolist.css';
import firebase from "firebase/app";
import { useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classesBtn from '../button.css';


class todoList extends Component{

    id(id){
        console.log("id "+id);
    }
    render(){
        return(
            <div> 
            <br/><br/>
            <table>
                  {this.props.todos.map(todo =>{
                    return(
                    <tr>
                        <td>
                            {todo.todo} 
                        </td>
                        <td>
                            <button className={classesBtn.button}  onClick={this.props.update.bind(this,todo.id,todo.inprogress)}>Done</button>
                            <div className={classesBtn.divider}/>
                            <button className={classesBtn.button}  onClick={this.props.delete.bind(this,todo.id)}>Delete</button>
                        </td>
                    </tr>
                    )})}

            </table> 
            </div>
        )
    
}
}

export default todoList;