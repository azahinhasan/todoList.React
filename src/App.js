import React, { Component } from 'react';

import firebase from "firebase/app";
import './App.css';
import { useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import TodoInput from './components/todoInput';
import TodoList from './components/showToDolist';
import Button from '@material-ui/core/Button';
import { db} from './firebase_config';
import Aux from './hoc/auxx';


class App extends Component {

  state={
    todoInput:'',
    // tode:{
    //   id:'',
    //   todo:'',
    //   inprogress:''
    // },
    todos:null
  }

  
  componentDidMount(){

    this.getTodo();

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


  // getTodos= () =>{
  //   let  aaa =[];
  //   console.log("aa");
  //   db.collection("todoList").onSnapshot(function (queryShanpshort){
    
  //  aaa=queryShanpshort.docs.map(doc => ({
  //       id: doc.id,
  //       todo: doc.data().todo,
  //       inprogress: doc.data().inprogress
  //   }))



  //   //console.log(aaa)
  //   //this.setState({todos :aaa})
  // })

  // // aaa})
  // console.log([...aaa]);
  // console.log(this.state.todos);
  // }


  getTodo= () =>{
    db.collection("todoList").get().then(snapshot => {
      const list =[];
      snapshot.forEach(doc => {
        const data = doc.data();
        list.push(data);
      })

    //console.log(snapshot.data);
    this.setState({todos : list})

    })
    .catch( error => console.log(error))

    // setTimeout(() => {
    //   console.log("d")
    // }, 5000);

   

  }
  
  deleteTodo =(id) => {
    db.collection("todoList").doc(id).delete();
    //console.log("Delete data : " + id);
  } 



  todoInputUpdate=(event)=>{
    this.setState({todoInput:event.target.value})
  }

  


  render(){

    let pageData = null;

    if(this.state.todos){
      pageData = (
        <Aux>
          <h1>ToDo List</h1>
          <TodoInput
          add={this.addTodo}
          delete={this.deleteTodo}
          state={this.state}
          todoInputUpdate={this.todoInputUpdate}
          />
          <TodoList
          todos={this.state.todos}
          /> 
          <button onClick={this.getTodo}>hhh</button>
        </Aux>
      );
    }
    return(

      <Aux>
        {pageData}
      </Aux>
    
    )
  }




}
export default App;
