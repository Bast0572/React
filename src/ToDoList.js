import { useMemo } from "react";
import List from "./List.js";
import { filterTodos } from "./utils.js";

export default function TodoList({ todos, tab }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  return (
    <div >
      <List items={visibleTodos} />
    </div>
  );
}
