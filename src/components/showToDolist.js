import React, { Component } from 'react';

import firebase from "firebase/app";
import { useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class todoList extends Component{

    id(id){
        console.log("id "+id);
    }
    render(){
        return(
            <div>
            <table>


                  {this.props.todos.map(todo =>{
                    return(
                    <tr>
                        <td>
                            {todo.todo} 
                        </td>
                        <td>
                            <button onClick={this.props.update.bind(this,todo.id,todo.inprogress)}>Done</button>
                            <button  onClick={this.props.delete.bind(this,todo.id)}>Delete</button>
                        </td>
                    </tr>
                    )})}

            </table> 
            </div>
        )
    
}
}

export default todoList;