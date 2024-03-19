import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import { useTodoDispatcher, useTodos } from "../context/TodoContext";

export function TodoFeature() {
  const dispatch = useTodoDispatcher();
  const state = useTodos();

  function handleThemeChange(e) {
    dispatch({
      type: "SET_THEME",
      theme: e.target.value,
    });
  }

  return (
    <div className="d-flex justify-content-center align-items-center p-20">
      <div className="card container p-20">
        <h1 className="mb-20 d-flex justify-content-center align-items-center">
          <span className="flex-fill">Liste de tâches</span>
          <select value={state.theme} onChange={handleThemeChange}>
            <option value="primary">Rouge</option>
            <option value="secondary">Bleu</option>
          </select>
        </h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}
