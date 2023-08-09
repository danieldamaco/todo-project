import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm() {
    const { setOpenModal, openModal, createNewTodo } = React.useContext(TodoContext)
    const [todoText, setTodoText] = React.useState('')

    const handleAñadir = () => {
        if (todoText !== '') {
            createNewTodo({ text: todoText, completed: false });
            setOpenModal(!openModal)
        }
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
                    onChange={(e) => setTodoText(e.target.value)}
                />
                <div className="todoForm-buttons">
                    <button
                        className="todoForm-buttons--cancelar"
                        onClick={() => setOpenModal(!openModal)}
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