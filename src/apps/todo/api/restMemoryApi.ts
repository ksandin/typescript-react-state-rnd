import express from "express";
import cors from "cors";
import { TodoId } from "../shared/TodoId";
import { Todo } from "../shared/Todo";
import { createCrudMemoryAdapter } from "../../../lib/crud/createCrudMemoryAdapter";
import { createNumericCrudIdentityFactory } from "../../../lib/crud/createNumericCrudIdentityFactory";
import { addCrudRestExpressRoutes } from "../../../lib/crud/addCrudRestExpressRoutes";

const app = express();
app.use(cors());
addCrudRestExpressRoutes(
  "/todo",
  app,
  createCrudMemoryAdapter<TodoId, Todo>(
    createNumericCrudIdentityFactory(
      (todo) => todo.id,
      (todo, id) => ({ ...todo, id })
    )
  )
);

const port = 3001;
app.listen(port, () => console.log(`${__filename} listening on port ${port}`));
