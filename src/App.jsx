import {TodoCounter} from './TodoCounter.jsx'
import {TodoSearch} from './TodoSearch.jsx'
import {TodoItem} from './TodoItem.jsx'
import {TodoList} from './TodoList.jsx'
import {CreateTodoButton} from './CreateTodoButton.jsx'
import React from 'react'

const defaultTodo = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Vivir felizmente', completed: false},
  {text: 'Hacer cositas que me hagan bien', completed: true},
  {text: 'Comer saludable', completed: true},
  {text: 'Vivir increible como dice GNC', completed: true}
]

function App() {
  const [todos, setTodos] = React.useState(defaultTodo);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const completeTodo = (todo) => {
    const newTodos = [...todos];
    const index = todos.indexOf(todo)
    newTodos[index].completed = (newTodos[index].completed === false ? true:false);
    setTodos(newTodos);
  }

  const deleteTodo = (todo) => {
    const index = todos.indexOf(todo);
    setTodos((
      index === 0? 
      todos.slice(1,todos.length): 
      todos.slice(0, index).concat(todos.slice(index+1,todos.length))));   
  }

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText)
    }
  );

  return (
    <>
      <TodoCounter completed = {completedTodos} total={totalTodos}/>
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}  
      />

      <TodoList>
        {searchedTodos.map((todo)=>(
          <TodoItem 
            key={todos.indexOf(todo)}
            onComplete={() => completeTodo(todo)}
            onDelete = {()=>deleteTodo(todo)}
            text={todo.text}
            completed ={todo.completed}/>
    ))}
        
      </TodoList>

      <CreateTodoButton/>
    </>
  );
}

export {App};
