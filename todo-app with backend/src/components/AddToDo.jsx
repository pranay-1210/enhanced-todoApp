import { TodoItemsContext } from "../store/TodoItemsContext";
import Button from "./Button";
import { useRef, useContext } from "react";

export function AddToDo() {
  const todoTextInput = useRef();
  const todoDateInput = useRef();
  const {addTodoItem} = useContext(TodoItemsContext);

  const addHandler = () => {
    // console.log("Trying to Add Button");
    const todoText = todoTextInput.current.value;
    const todoDate = todoDateInput.current.value;
    todoTextInput.current.value ='';
    todoDateInput.current.value = '';
    addTodoItem(todoText, todoDate);
  }

  // const textChangeHandler = (event) => {
  //   console.log(event.target.value);
  //   console.log(event);

  // }
  return (
    <div className="container">
      <div className="row">
        <div className="col-5">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Todo Here"
            ref={todoTextInput}
          />
        </div>
        <div className="col-3">
          <input type="date" ref = {todoDateInput} className="form-control"/>
        </div>
        <div className="col-2">
         <Button btnType="success" btnText="Add" handler={addHandler}/> 
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
