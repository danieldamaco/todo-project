import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const {setOpenModal, openModal, saveTodos} = React.useContext(TodoContext)
    const [todoText, setTodoText] = React.useState('')

    const handleAñadir = () => {
        saveTodos({ text: todoText, completed: false });
    }

    return (
        <>
            <div className="todoForm-container">
                <h2 className="todoForm-title">Escribe tu nuevo TODO</h2>
                <input 
                type="text" 
                name="" 
                className="todoForm-input" 
                placeholder="Ej. lavar ropa"
                onChange={(e)=> setTodoText(e.target.value)}
                />
                <div className="todoForm-buttons">
                    <button 
                    className="todoForm-buttons--cancelar"
                    onClick={()=> setOpenModal(!openModal)}
                    >Cancelar</button>
                    <button 
                    className="todoForms-buttons--añadir" 
                    type="submit"
                    onClick={handleAñadir}
                    >Añadir</button>
                </div>
            </div>
        </>
    );
}

export { TodoForm }