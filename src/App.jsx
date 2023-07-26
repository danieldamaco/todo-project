import {TodoCounter} from './TodoCounter.jsx'
import {TodoSearch} from './TodoSearch.jsx'
import {TodoItem} from './TodoItem.jsx'
import {TodoList} from './TodoList.jsx'
import {CreateTodoButton} from './CreateTodoButton.jsx'

const defaultTodo = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Vivir felizmente', completed: false},
  {text: 'Hacer cositas que me hagan bien', completed: true},
  {text: 'Comer saludable', completed: true},
  {text: 'Vivir increible como dice GNC', completed: true}
]

function App() {
  return (
    <>
      <TodoCounter completed = {5} total={10}/>
      <TodoSearch/>

      <TodoList>
        {defaultTodo.map((todo, i)=>(
          <TodoItem 
            key = {i} 
            text={todo.text}
            completed ={todo.completed}/>
    ))}
        
      </TodoList>

      <CreateTodoButton/>
    </>
  );
}

export {App};
