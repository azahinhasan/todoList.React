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
import classes from './App.css';

let a = false;
class App extends Component {

  state={
    updateCounter:0,
    updatePage:false,
    todoInput:'Enter Your ToDo',
    // tode:{
    //   id:'',
    todos:[],
    darkMood:false,
    //   inprogress:''
    // },
    // todos:[ {id: "fafdafa",todo:"hello",inprogress: true},
    // {id: "fafdfa",todo:"fuck you.you are totally shit hofie hofaie hafoe l",inprogress: true}]
  }

  
  componentDidMount(){
   //console.log("[App.js] componentDidMount");
    this.getTodo();
  }
  componentDidUpdate(){
    if(this.state.updatePage){
      //console.log("[App.js] componentDidUpdate");
      this.getTodo();
      this.setState({updatePage : false});
    }
  }



  addTodo =(e) => {
    //console.log("added");
    //e.preventDefault();

    if(this.state.todoInput!='Enter Your ToDo'){
      db.collection("todoList").add({
        inprogress: true,
        timestmp: firebase.firestore.FieldValue.serverTimestamp(),
        todo:this.state.todoInput
      });
     this.setState({todoInput : 'Enter Your ToDo' , updatePage : true});
    }


  }





  getTodo= () =>{
    db.collection("todoList").orderBy("timestmp" ,"desc").get().then(snapshot => {
      const list =[];
      snapshot.forEach(doc => {
        const data = {
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress
        }
        list.push(data);
      })
    this.setState({todos : list},()=>this.getTodo())
    })
    .catch( error => console.log(error))
    //this.forceUpdate();
  }
  

  deleteTodo =(id) => {

    db.collection("todoList").doc(id).delete();
    this.setState({updatePage : true ,updateCounter:this.state.updateCounter+1});
     //setTimeout(() => {  window.location.reload(false); }, 100);
   // this.forceUpdate();
    
  } 



  todoInputUpdate=(event)=>{
    this.setState({todoInput:event.target.value})
  }

  hideValueOfInput=()=>{
    if(this.state.todoInput== "Enter Your ToDo"){
      this.setState({todoInput:""})
    }
  }



  updateTodo=(id,inprogress)=>{
    db.collection("todoList").doc(id).update({inprogress: !inprogress});
    this.setState({updatePage : true ,updateCounter: this.state.updateCounter+1});
    //this.forceUpdate();
    //setTimeout(() => {  window.location.reload(false); }, 800); 
  }


  render(){
    
    let pageData = null;

    if(this.state.todos){
      
      pageData = (
        <div>
          <h1>ToDo List</h1>
          <TodoInput
          key={4}
          add={this.addTodo}
          state={this.state}
          hideValueOfInput={this.hideValueOfInput}
          todoInputUpdate={this.todoInputUpdate}
          />
          <TodoList
          key={1}
          todos={this.state.todos}
          delete={this.deleteTodo}
          update={this.updateTodo}
          /> 
         
          {/* <button onClick={this.getTodo}>hhh</button> */}
        </div>
      );
    }
    return(

      <div className={classes.App}>
        {pageData}
        <p>Remove and Done All</p>
      </div>
    
    )
  }




}
export default App;
