import './TodoCounter.css';
import React from 'react';
import {TodoContext} from '../TodoContext'

function TodoCounter({completed, total}){
  const {completedTodos, totalTodos} = React.useContext(TodoContext);
  return(
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> To Do's
    </h1>
  );
}

export {TodoCounter};