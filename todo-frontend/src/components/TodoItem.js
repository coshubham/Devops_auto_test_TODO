import React from "react";

const TodoItem = ({ todo, onDelete, onComplete }) => {
       return (
              <div>
              <p>
              {todo.title} {todo.onCompleted}
              </p>
              <button>Delete</button>
              </div>
       );
       }
export default TodoItem;