import { TodoCounter } from '../TodoCounter'
import { TodoSearch } from '../TodoSearch'
import { TodoItem } from '../TodoItem'
import { TodoList } from '../TodoList'
import { CreateTodoButton } from '../CreateTodoButton'
import { TodoLoading } from '../TodoLoading'
import { TodoError } from '../TodoError'
import { EmptyTodos } from '../EmptyTodos'
import { TodoContext } from '../TodoContext'


import React from "react";

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    todos,
    completeTodo,
    deleteTodo
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading === true ? <TodoLoading /> : ''}
        {error === true ? <TodoError /> : ''}
        {(loading === false && searchedTodos.length === 0) ? <EmptyTodos /> : ''}

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

export { AppUI }