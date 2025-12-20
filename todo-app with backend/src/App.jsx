import { AppName } from "./components/AppName";

import { AddToDo } from "./components/AddToDo";
import { AllInOne } from "./components/AllInOne";
import { TodoItemsProvider } from "./store/TodoItemsContext";

function App() {
  return (
    <TodoItemsProvider>
      <center>
        <AppName />
        <AddToDo />
        <AllInOne />
      </center>
    </TodoItemsProvider>
  );
}

export default App;
