import './TodoItem.css';

function TodoItem({text, completed}) {
  return (
    <li className="TodoItem">
      <span className={`Icon-check ${completed === true? "Icon-check--activate": ""}`}></span>
      <p className={`TodoItem-p ${completed === true ? "TodoItem-p--complete": ""}`}>{text}</p>
      <span className="Icon Icon-delete"></span>
    </li>
  );
}
export {TodoItem};