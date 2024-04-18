import { memo, useState } from "react";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
export function createTodos() {
  const fields = ["work", "study", "entertainment","family"];
  const todos = [];
  for (let i = 0; i < 5; i++) {
    todos.push({
      id: i,
      title: "Todo " + (i + 1),
      content: "content content content content",
      completed: Math.random() > 0.5,
      type: fields[getRandomInt(fields.length)],
    });
  }
  return todos;
}
/*
const [filteredTodos, setFilteredTodos] = useState(todos);
const handleFilter = (event) => {
  const value = event.target.value;
  const filtered = todos.filter((todo) => todo.title.includes);
  setFilteredTodos(filtered);
};*/

export function filterTodos(todos, tab) {
  return todos.filter((todo) => {
    if (tab === "all") {
      return true;
    } else if (tab === "active") {
      return !todo.completed;
    } else if (tab === "completed") {
      return todo.completed;
    }

    if (tab === "work") {
      return todo.type.includes("work");
    }
    if (tab === "study") {
      return todo.type.includes("study");
    }
    if (tab === "entertainment"){
        return todo.type.includes("entertainment")
    }
    if (tab === "family"){
        return todo.type.includes("family")
    }
  });
}
