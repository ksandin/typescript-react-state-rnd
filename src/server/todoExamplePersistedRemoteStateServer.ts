import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { TodoId } from "../shared/state/TodoId";
import { Todo } from "../shared/state/Todo";
import { createCrudMemoryAdapter } from "../lib/crud/createCrudMemoryAdapter";
import { createNumericCrudIdentityFactory } from "../lib/crud/createNumericCrudIdentityFactory";

const app = express();
app.use(cors());
const jsonParser = bodyParser.json();

const adapter = createCrudMemoryAdapter<TodoId, Todo>(
  createNumericCrudIdentityFactory(
    (todo) => todo.id,
    (todo, id) => ({ ...todo, id })
  )
);

// Create
app.post("/todo", jsonParser, async (req, res) =>
  res.json(await adapter.create(req.body as Todo))
);

// readAll
app.get("/todo", async (req, res) => res.json(await adapter.readAll()));

// Update
app.put("/todo", jsonParser, async (req, res) =>
  res.json(await adapter.update(req.body as Todo))
);

// Delete
app.delete("/todo/:id", async (req, res) => {
  const id = parseInt(req.params.id, 10) as TodoId;
  await adapter.delete(id);
  res.end();
});

app.listen(3001, () => {
  console.log("todoExamplePersistedRemoteStateServer listening on port 3001");
});
