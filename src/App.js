import React, { Component } from 'react';

import firebase from "firebase/app";
import './App.css';
import { useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import TodoInput from './components/todoInput';
import Button from '@material-ui/core/Button';
import { db} from './firebase_config';


class App extends Component {

  state={
    todoInput:'',
    todos:{
      id:'',
      todo:'',
      inprogress:''
    }
  }

  addTodo =(e) => {
    //e.preventDefault();
    console.log("add todo");

    db.collection("todoList").add({
      inprogress: true,
      timestmp: firebase.firestore.FieldValue.serverTimestamp(),
      todo:this.state.todoInput

    });

   this.setState({todoInput : ''});

  }


  getTodos= () =>{
  db.collection("todoList").onSnapshot(function (queryShanpshort){

    this.setState({todos :
      queryShanpshort.docs.map((doc) => ({
      id: doc.id,
      todo: doc.data().todo,
      inprogress: doc.data().inprogress}))})
   })
  }

  
  deleteTodo =(id) => {
    db.collection("todoList").doc(id).delete();
    //console.log("Delete data : " + id);
  } 



  todoInputUpdate=(event)=>{
    this.setState({todoInput:event.target.value})
  }


  render(){
    return(

      <div>
        <h1>ToDo List</h1>
        
        <TodoInput
        add={this.addTodo}
        delete={this.deleteTodo}
        state={this.state}
        todoInputUpdate={this.todoInputUpdate}
        />

      </div>
    )
  }




}
export default App;
