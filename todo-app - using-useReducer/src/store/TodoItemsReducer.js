const TodoItemsReducer = (currentTodoItems, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...currentTodoItems,
        {
          id: action.payload.todoText,
          todoText: action.payload.todoText,
          todoDate: action.payload.todoDate,
        },
      ];

    case "DELETE_ITEM":
      return currentTodoItems.filter(
        (item) => item.id !== action.payload.todoId
      );

    default:
      return currentTodoItems;
  }
};

export default TodoItemsReducer;
