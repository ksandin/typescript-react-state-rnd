import express from "express";
import cors from "cors";
import { MongoMemoryServer } from "mongodb-memory-server";
import { Schema, Document, Connection, createConnection } from "mongoose";
import { documentSchemaDefinition } from "../../../lib/mongoose-tsextensions/documentSchemaDefinition";
import { addCrudRestExpressRoutes } from "../../../lib/crud/addCrudRestExpressRoutes";
import { createCrudMongooseAdapter1to1 } from "../../../lib/crud/createCrudMongooseAdapter1to1";
import { Todo } from "../shared/Todo";

type TodoDocument = Omit<Todo, "id"> & Document;

const TodoSchema = new Schema(
  documentSchemaDefinition<TodoDocument>({
    label: { type: String, required: true },
    done: { type: Boolean, required: true },
  })
);

type TodoModels = ReturnType<typeof createModels>;

const createModels = (conn: Connection) => ({
  TodoModel: conn.model<TodoDocument>("Todo", TodoSchema),
});

async function startMongoDB() {
  const mongoDB = new MongoMemoryServer();
  const uri = await mongoDB.getUri();
  return createConnection(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
}

async function startExpress(models: TodoModels) {
  const app = express();
  app.use(cors());
  addCrudRestExpressRoutes(
    "/todo",
    app,
    createCrudMongooseAdapter1to1<Todo, TodoDocument>(models.TodoModel, "id")
  );

  const port = 3002;
  app.listen(port, () =>
    console.log(`${__filename} listening on port ${port}`)
  );
  return app;
}

async function mongoDBExample() {
  const connection = await startMongoDB();
  const models = createModels(connection);
  await startExpress(models);
}

mongoDBExample();
