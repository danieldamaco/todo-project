import './TodoItem.css';

function TodoItem({text}) {
  return (
    <li className="TodoItem">
      <span className="Icon-check Icon-check--activate"></span>
      <p className="TodoItem-p TodoItem-p--complete">{text}</p>
      <span className="Icon Icon-delete"></span>
    </li>
  );
}
export {TodoItem};