import Button from "./Button";
 
const TodoItem = ({ id, todoText, todoDate }) => {
  const deleteHandler = () => {
    console.log(`Trying to Delete ${id} ${todoText}`);
  }

  return (
    <div className="container">
      <div className="row my-row">
        <div className="col-5 text-truncate pt-2">{todoText}</div>
        <div className="col-3 pt-2">{todoDate}</div>
        <div className="col-2">
          <Button btnType="danger" btnText="Delete" handler={deleteHandler}/>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;