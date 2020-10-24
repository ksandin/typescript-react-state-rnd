import { Todo } from "./Todo";

let idCounter = 0;
const nextId = () => idCounter++;

export const createTodo = (label: string): Todo => ({
  id: nextId(),
  label,
  done: false,
});
