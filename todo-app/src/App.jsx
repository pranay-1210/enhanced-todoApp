import { AppName } from "./components/AppName";

import { AddToDo } from "./components/AddToDo";
import { AllInOne } from "./components/AllInOne";
import initialTodoItems from "./data/InitialTodoItems";

import { useState } from "react";
// import { TestForm } from "./components/TestForm";

function App() {
  
  const [todoItems, setTodoItems] = useState(initialTodoItems);
  // console.log(todoItems);


  const addToItem = (todoText, todoDate) => {
    setTodoItems(currentItems => {
      return [...currentItems, { id: todoText, todoText, todoDate}]
    })
    
  }

  const deleteTodoItem = (todoId) => {
    // console.log(`Delete Todo with id ${todoId}`);
    setTodoItems(currentItems => {
      return currentItems.filter(item => item.id !== todoId);
    })

  }



  return (
    <>
    <center>      
      <AppName />
      <AddToDo addTodoItem={addToItem} />
      <AllInOne todoItems={todoItems} deleteTodoItem={deleteTodoItem}/>
    </center>
    </>
  )
   
}

export default App;
