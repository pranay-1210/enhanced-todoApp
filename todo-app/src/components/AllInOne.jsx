import TodoItem from './TodoItem'
export function AllInOne() {
     const todoItems = [
    { id: 1, todoText: "Buy Milk", todoDate: "9-Nov-2025" },
    { id: 2, todoText: "Go To College", todoDate: "WeekDay" },
    { id: 3, todoText: "Exercise", todoDate: "EveryDay" }
  ];

  return (
    <>
      {todoItems.map((item) => (
        <TodoItem
          key={item.id} id={item.id} todoText={item.todoText} todoDate={item.todoDate}/>
      ))}

    </> 
  );
}