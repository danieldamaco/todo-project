import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoItem } from '../TodoItem'
import { TodoList } from '../TodoList'
import { CreateTodoButton } from '../CreateTodoButton'
import React from "react";

function AppUI({
    completedTodos, 
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    todos,
    completeTodo
}){
    return (
        <>
          <TodoCounter completed={completedTodos} total={totalTodos} />
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
    
          <TodoList>
            {searchedTodos.map((todo) => (
              <TodoItem
                key={todos.indexOf(todo)}
                onComplete={() => completeTodo(todo)}
                onDelete={() => deleteTodo(todo)}
                text={todo.text}
                completed={todo.completed} />
            ))}
    
          </TodoList>
    
          <CreateTodoButton />
        </>
      );
}

export {AppUI}