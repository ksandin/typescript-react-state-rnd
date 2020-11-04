import { TodoId } from "./TodoId";

export type Todo = {
  id: TodoId;
  label: string;
  done: boolean;
};
