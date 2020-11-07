import { Todo } from "./Todo";

export const toggleTodoDone = (todo: Todo): Todo => ({
  ...todo,
  done: !todo.done,
});
