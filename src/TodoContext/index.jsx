import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    //Así se renombran los elementos de un objeto nombre: nombre que yo quiero
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    
    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;

    const completeTodo = (todo) => {
        const newTodos = [...todos];
        const index = todos.indexOf(todo)
        newTodos[index].completed = (newTodos[index].completed === false ? true : false);
        saveTodos(newTodos);
    }

    const deleteTodo = (todo) => {
        const index = todos.indexOf(todo);
        saveTodos((
            index === 0 ?
                todos.slice(1, todos.length) :
                todos.slice(0, index).concat(todos.slice(index + 1, todos.length))));
    }

    const searchedTodos = todos.filter(
        (todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText)
        }
    );

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            todos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            saveTodos
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider }

// const defaultTodo = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Vivir felizmente', completed: false },
//   { text: 'Hacer cositas que me hagan bien', completed: true },
//   { text: 'Comer saludable', completed: true },
//   { text: 'Vivir increible como dice GNC', completed: true }
// ]