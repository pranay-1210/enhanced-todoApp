import TodoItem from './TodoItem'
export function AllInOne({todoItems}) {
    

  return (
    <>
      {todoItems.map((item) => (
        <TodoItem
          key={item.id} id={item.id} todoText={item.todoText} todoDate={item.todoDate}/>
      ))}

    </> 
  );
}