import { TodoItemsContext } from "../store/TodoItemsContext";
import Button from "./Button";
import {useContext} from 'react';
 
const TodoItem = ({ id, todoText, todoDate}) => {
  
  const {deleteTodoItem} = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-5 text-truncate pt-2">{todoText}</div>
        <div className="col-3 pt-2">{todoDate}</div>
        <div className="col-2">
          <Button btnType="danger" btnText="Delete" handler={() => deleteTodoItem(id)}/>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;