import './TodoItem.css';

function TodoItem({text, completed, key, onChange, onDelete}) {

  return (
    <li className="TodoItem">
      <span 
      onClick={onChange}
      className={`Icon-check ${completed === true? "Icon-check--activate": ""}`}></span>
      <p className={`TodoItem-p ${completed === true ? "TodoItem-p--complete": ""}`}>{text}</p>
      <span onClick={onDelete} className="Icon Icon-delete"></span>
    </li>
  );
}
export {TodoItem};