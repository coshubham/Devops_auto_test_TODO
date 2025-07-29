import React, {useState, useEffect} from "react";

import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import BACKEND_URL from "../config/config";

const TodoList = () => {
       const [todos, setTodos] = useState([]);

       useEffect(() => {
              const fetchTodos = async () => {
                     try {
                            const response = await fetch(`${BACKEND_URL}/get-todo`);
                            const data = await response.json();
                            setTodos(data);
                     } catch (error) {
                            console.error("Error fetching todos:", error);
                     }
              };
              fetchTodos();
       }, []);

       const addTodo = async(title) =>{
              try {
                     const response = await fetch(`http://localhost:3001/api/add-todo`, {
                            method: "POST",
                            headers: {
                                   "Content-Type": "application/json"
                            },
                            body: JSON.stringify({ title: title }) // Match backend
                     });
                     const newTodo = await response.json();
                     setTodos((prev) => [...prev, newTodo]); // Update state with new todo
                     console.log("Response:", response);
                     
              } catch (error) {
                     console.error("Error adding todo:", error);
              }
       }



       return (
              <div>
                     <h1>Todo List</h1>
                     <AddTodo onAdd= {addTodo} />
                    <ul>
                     {
                            todos.map( todo => (
                                <TodoItem key={todo._id} todo={todo}></TodoItem>

                            ))
                     }
                    </ul>
              </div>
       )
}

export default TodoList;