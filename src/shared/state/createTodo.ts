import { Todo } from "./Todo";
import { TodoId } from "./TodoId";

export const createTodo = (label: string): Todo => ({
  id: -1 as TodoId,
  label,
  done: false,
});
